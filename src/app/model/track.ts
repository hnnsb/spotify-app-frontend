import {Artist} from "./artist";
import {ExternalUrls} from "./externalUrls";

export interface Track {
  album: {
    albumGroup: string,
    albumType: string,
    artists: Artist[]
    availableMarkets: string[],
    externalUrls: ExternalUrls,
    href: string,
    id: string,
    images: {
      height: number,
      url: string,
      width: number
    }[],
    name: string,
    releaseDate: string,
    releaseDatePrecision: string,
    restrictions: {
      reason: string
    },
    type: string,
    uri: string
  },
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
