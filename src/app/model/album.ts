import {Artist} from "./artist";
import {ExternalUrls} from "./externalUrls";
import {Image} from "./image";

export interface Album {
  albumGroup: string,
  albumType: string,
  artists: Artist[]
  availableMarkets: string[],
  externalUrls: ExternalUrls,
  href: string,
  id: string,
  images: Image[],
  name: string,
  releaseDate: string,
  releaseDatePrecision: string,
  restrictions: {
    reason: string
  },
  type: string,
  uri: string
}
