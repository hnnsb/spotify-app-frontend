import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Artist} from "../model/artist";

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  requestUrl = environment.backendUrl + "/users";

  constructor(private http:HttpClient) { }

  getTopArtists() {
    return this.http.get<Artist[]>(this.requestUrl + "/top-artists")
  }
}
