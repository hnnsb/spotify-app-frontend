import {Component, OnInit} from '@angular/core';
import {UserInfoService} from "../services/user-info.service";
import {Artist} from "../model/artist";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
  constructor( private userService:UserInfoService) {

  }

  artists:Artist[] | undefined;
  authorized:boolean = false;

  getTopArtists() {
    return this.userService.getTopArtists()
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

  ngOnInit(): void {
    this.getTopArtists();
  }

}
