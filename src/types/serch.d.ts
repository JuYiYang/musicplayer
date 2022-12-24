export interface Iserch extends IapiType {
  result: Result;
}

export interface Result {
  albums: Album[];
  artists: Artist2[];
  songs: Song[];
  playlists: Playlist[];
  order: string[];
}

export interface Album {
  id: number;
  name: string;
  artist: Artist;
  publishTime: number;
  size: number;
  copyrightId: number;
  status: number;
  picId: number;
  mark: number;
  transNames?: string[];
}

export interface Artist {
  id: number;
  name: string;
  picUrl: string;
  alias: string[];
  albumSize: number;
  picId: number;
  fansGroup: any;
  img1v1Url: string;
  img1v1: number;
  alia?: string[];
  trans: any;
}

export interface Artist2 {
  id: number;
  name: string;
  picUrl: string;
  alias: any[];
  albumSize: number;
  picId: number;
  fansGroup: any;
  img1v1Url: string;
  accountId: number;
  img1v1: number;
  trans: any;
}

export interface Song {
  id: number;
  name: string;
  artists: Artist3[];
  album: Album2;
  duration: number;
  copyrightId: number;
  status: number;
  alias: string[];
  rtype: number;
  ftype: number;
  mvid: number;
  fee: number;
  rUrl: any;
  mark: number;
  transNames?: string[];
}

export interface Artist3 {
  id: number;
  name: string;
  picUrl: any;
  alias: any[];
  albumSize: number;
  picId: number;
  fansGroup: any;
  img1v1Url: string;
  img1v1: number;
  trans: any;
}

export interface Album2 {
  id: number;
  name: string;
  artist: Artist4;
  publishTime: number;
  size: number;
  copyrightId: number;
  status: number;
  picId: number;
  mark: number;
  transNames?: string[];
  alia?: string[];
}

export interface Artist4 {
  id: number;
  name: string;
  picUrl: any;
  alias: any[];
  albumSize: number;
  picId: number;
  fansGroup: any;
  img1v1Url: string;
  img1v1: number;
  trans: any;
}

export interface Playlist {
  id: number;
  name: string;
  coverImgUrl: string;
  creator: any;
  subscribed: boolean;
  trackCount: number;
  userId: number;
  playCount: number;
  bookCount: number;
  specialType: number;
  officialTags: any;
  action: any;
  actionType: any;
  recommendText: any;
  score: any;
  description: string;
  highQuality: boolean;
}

export type IHot = IHotList[];

export interface IHotList {
  searchWord: string;
  score: number;
  content: string;
  source: number;
  iconType: number;
  iconUrl?: string;
  url: string;
  alg: string;
}
