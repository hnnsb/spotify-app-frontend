export interface Artist {
  externalUrls: {
    externalUrls: {
      spotify:string
    }
  },
  followers: {
    href:string,
    total:number
  }
  genres:string[],
  href:string,
  id:string,
  images:{
    height:number,
    url:string,
    width:number
  }[],
  name:string,
  popularity:number,
  type:string,
  uri:string
}
