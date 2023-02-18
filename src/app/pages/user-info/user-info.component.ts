import {Component, Input, OnInit} from '@angular/core';
import {UserInfoService} from "../../services/user-info.service";
import {TimeRange} from "../../model/timeRange";
import {Track} from "../../model/track";
import {Artist} from "../../model/artist";


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  constructor(private userService: UserInfoService) {

  }

  amount: number = 10;

  timeRanges: TimeRange[] = [
    {viewValue: "Short term", value: "short_term"},
    {viewValue: "Medium term", value: "medium_term"},
    {viewValue: "Long term", value: "long_term"}
  ];

  @Input()
  selectedTimeRange: TimeRange = this.timeRanges[0];

  artists: Artist[] | undefined;
  tracks: Track[] | undefined;
  authorized: boolean = true;

  getTopArtists() {
    this.userService.getTopArtists(this.selectedTimeRange.value, this.amount)
      .subscribe({
        next: response => {
          this.artists = response;
          this.authorized = true;
        },
        error: () => {
          this.authorized = false;
        }
      });
  }

  getTopTracks() {
    this.userService.getTopTracks(this.selectedTimeRange.value, this.amount)
      .subscribe({
        next: response => {
          this.tracks = response;
          this.authorized = true;
        },
        error: () => {
          this.authorized = false;
        }
      });
  }

  ngOnInit(): void {
    this.getTopArtists();
    this.getTopTracks();
    console.log(this.authorized);
  }

  onChange(newValue: number): void {
    this.amount = newValue;
    this.getTopArtists();
    this.getTopTracks();
  }


}
