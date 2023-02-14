import {Component, Input, OnInit} from '@angular/core';
import {UserInfoService} from "../../services/user-info.service";
import {Artist} from "../../model/artist";
import {TimeRange} from "../../model/timeRange";
import {Track} from "../../model/track";


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  constructor(private userService: UserInfoService) {

  }

  @Input()
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
  authorized: boolean = false;

  getTopArtists() {
    return this.userService.getTopArtists(this.selectedTimeRange.value, this.amount)
      .subscribe({
        next: response => {
          this.authorized = true;
          this.artists = response;
        },
        error: () => {
          this.authorized = false;
        }
      });
  }

  getTopTracks() {
    return this.userService.getTopTracks(this.selectedTimeRange.value, this.amount)
      .subscribe({
        next: response => {
          this.authorized = true;
          this.tracks = response;
        },
        error: () => {
          this.authorized = false;
        }
      });
  }

  ngOnInit(): void {
    this.getTopArtists();
    this.getTopTracks();
  }

  onChange(newValue: number): void {
    this.amount = newValue;
    this.getTopArtists();
    this.getTopTracks();
  }


}
