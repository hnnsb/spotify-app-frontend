import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album} from "../model/album";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  searchAlbum(query: string): Observable<Album[]> {
    return this.http.get<Album[]>(environment.backendUrl + '/spotify/search/album', {params: {"query": query}});
  }
}
