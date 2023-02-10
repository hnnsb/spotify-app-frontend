import {Component, OnInit} from '@angular/core';
import {UserInfoService} from "../services/user-info.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
  constructor( private userService:UserInfoService) {

  }

  artists:any[] | undefined;


  getTopArtists() {
    return this.userService.getTopArtists();
  }

  ngOnInit(): void {
    this.getTopArtists()
      .subscribe(response => {
        this.artists = response;
      });
  }

}
