import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  loginUrl = environment.backendUrl + "/spotify/login";

  getLoginUri() {
    console.log("LoginService has been called")
    type result = {
      url?: string
    };

    let request = this.http.get<result>(this.loginUrl);
    request.subscribe(value => {
      console.log("Request was successful: " + value.url);
      window.open(value.url, "_self");
    })
  }
}
