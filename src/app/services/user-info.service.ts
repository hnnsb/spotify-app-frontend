import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Artist} from "../model/artist";
import {Track} from "../model/track";

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  requestUrl = environment.backendUrl + "/users";

  constructor(private http: HttpClient) {
  }

  getTopArtists(time_range: string, amount: number) {
    return this.http.get<Artist[]>(this.requestUrl + "/top-artists?time-range=" + time_range + '&amount=' + amount)
  }

  getTopTracks(time_range: string, amount: number) {
    return this.http.get<Track[]>(this.requestUrl + "/top-tracks?time-range=" + time_range + '&amount=' + amount)
  }
}
