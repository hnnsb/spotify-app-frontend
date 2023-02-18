import {Artist} from "./artist";
import {ExternalUrls} from "./externalUrls";
import {Album} from "./album";

export interface Track {
  album: Album,
  artists: Artist[]
  availableMarkets: string[],
  discNumber: number,
  durationMs: number,
  externalIds: {
    externalIds: {
      additionalProp1: string,
      additionalProp2: string,
      additionalProp3: string
    }
  },
  externalUrls: ExternalUrls,
  href: string,
  id: string,
  isPlayable: boolean,
  linkedFrom: {
    externalUrls: ExternalUrls,
    href: string,
    id: string,
    type: string,
    uri: string
  },
  restrictions: {
    reason: string,
  },
  name: string,
  popularity: number,
  previewUrl: string,
  trackNumber: number,
  type: string,
  uri: string,
  isExplicit: boolean
}
