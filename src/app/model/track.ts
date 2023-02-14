import {Artist} from "./artist";

export interface Track {
  album: {
    albumGroup: string,
    albumType: string,
    artists: Artist[]
    availableMarkets: string[],
    externalUrls: {
      externalUrls: {
        additionalProp1: string,
        additionalProp2: string,
        additionalProp3: string
      }
    },
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
  externalUrls: {
    externalUrls: {
      spotify: string,
      additionalProp1: string,
      additionalProp2: string,
      additionalProp3: string
    }
  },
  href: string,
  id: string,
  isPlayable: boolean,
  linkedFrom: {
    externalUrls: {
      externalUrls: {
        additionalProp1: string,
        additionalProp2: string,
        additionalProp3: string
      }
    },
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
