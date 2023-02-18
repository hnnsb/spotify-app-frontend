import {Component, Input} from '@angular/core';
import {SearchService} from "../../services/search.service";
import {Album} from "../../model/album";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {
  constructor(private searchService: SearchService) {
  }

  searchResult: Album[] | undefined
  searchQuery: string = "";

  @Input()
  choice: Album | undefined;

  search() {
    this.searchService.searchAlbum(this.searchQuery).subscribe(response => {
      this.searchResult = response;
    });
  }

  choose(album: Album) {
    this.choice = album
    this.searchResult = this.searchResult?.filter(obj => obj === album);

  }
}
