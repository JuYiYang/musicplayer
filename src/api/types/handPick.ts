export interface RersonalizedRes extends IapiType.Iapi {
  more: boolean;
  offset: number;
  result: PersonalizedItem[];
}

export interface DjprogramRes extends IapiType.IResult<DjprogramItem[]> {
  category: number;
}

export interface MvRes extends IapiType.IResult<MvItem[]> {
  category: number;
}

export interface PersonalizedItem {
  id: number;
  url: string;
  picUrl: string;
  sPicUrl: string;
  type: number;
  copywriter: string;
  name: string;
  time: number;
}
export interface DjprogramItem {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: any;
  program: any;
  alg: string;
}

export interface MvItem {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: any;
  duration: number;
  playCount: number;
  subed: boolean;
  artists: MVArtist[];
  artistName: string;
  artistId: number;
  alg: string;
}

export interface MVArtist {
  id: number;
  name: string;
}
