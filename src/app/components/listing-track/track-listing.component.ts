import {Component, Input} from '@angular/core';
import {Track} from "../../model/track";

@Component({
  selector: 'app-track-listing',
  templateUrl: './track-listing.component.html',
  styleUrls: ['./track-listing.component.scss']
})
export class TrackListingComponent {
  @Input()
  tracks: Track[] | undefined;

}
