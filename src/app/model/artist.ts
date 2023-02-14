import {ExternalUrls} from "./externalUrls";
import {Image} from "./image";

export interface Artist {
  externalUrls: ExternalUrls,
  followers: {
    href: string,
    total: number
  }
  genres: string[],
  href: string,
  id: string,
  images: Image[],
  name: string,
  popularity: number,
  type: string,
  uri: string
}
