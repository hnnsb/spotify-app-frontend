import {Component, Input} from '@angular/core';
import {Artist} from "../../model/artist";

@Component({
  selector: 'app-artist-listing',
  templateUrl: './artist-listing.component.html',
  styleUrls: ['./artist-listing.component.scss']
})
export class ArtistListingComponent {
  @Input()
  artists: Artist[] | undefined;

}
