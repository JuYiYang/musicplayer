export interface IBannerParams {
  type: "0" | "1" | "2" | "3";
  // pc  android  ios  ipad
}

export interface IBannerRes {
  code: number;
  banners: IBannerAr;
}

export interface IBannerAr {
  pic: string;
  targetId: number;
  adid: any;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  url?: string;
  adurlV2: any;
  exclusive: boolean;
  monitorImpress: any;
  monitorClick: any;
  monitorType: any;
  monitorImpressList: any[];
  monitorClickList: any[];
  monitorBlackList: any;
  extMonitor: any;
  extMonitorInfo: any;
  adSource: any;
  adLocation: any;
  encodeId: string;
  program: any;
  event: any;
  video: any;
  dynamicVideoData: any;
  song?: Song;
  bannerId: string;
  alg: string;
  scm: string;
  requestId: string;
  showAdTag: boolean;
  pid: any;
  showContext: any;
  adDispatchJson: any;
  s_ctrp: string;
  logContext: any;
  bannerBizType: string;
}

export interface Song {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: Ar[];
  alia: string[];
  pop: number;
  st: number;
  rt: string;
  fee: number;
  v: number;
  crbt: any;
  cf: string;
  al: Al;
  dt: number;
  h: H;
  m: M;
  l: L;
  sq?: Sq;
  hr?: Hr;
  a: any;
  cd: string;
  no: number;
  rtUrl: any;
  ftype: number;
  rtUrls: any[];
  djId: number;
  copyright: number;
  s_id: number;
  mark: number;
  originCoverType: number;
  originSongSimpleData: any;
  tagPicList: any;
  resourceState: boolean;
  version: number;
  songJumpInfo: any;
  entertainmentTags: any;
  single: number;
  noCopyrightRcmd: any;
  mv: number;
  rtype: number;
  rurl: any;
  mst: number;
  cp: number;
  publishTime: number;
  privilege: Privilege;
  alg: string;
}

export interface Ar {
  id: number;
  name: string;
  tns: any[];
  alias: any[];
}

export interface Al {
  id: number;
  name: string;
  picUrl: string;
  tns: any[];
  pic_str: string;
  pic: number;
}

export interface H {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface M {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface L {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface Sq {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface Hr {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

export interface Privilege {
  id: number;
  fee: number;
  payed: number;
  st: number;
  pl: number;
  dl: number;
  sp: number;
  cp: number;
  subp: number;
  cs: boolean;
  maxbr: number;
  fl: number;
  toast: boolean;
  flag: number;
  preSell: boolean;
  playMaxbr: number;
  downloadMaxbr: number;
  maxBrLevel: string;
  playMaxBrLevel: string;
  downloadMaxBrLevel: string;
  plLevel: string;
  dlLevel: string;
  flLevel: string;
  rscl: any;
  freeTrialPrivilege: FreeTrialPrivilege;
  chargeInfoList: ChargeInfoList[];
}

export interface FreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
  listenType: any;
}

export interface ChargeInfoList {
  rate: number;
  chargeUrl: any;
  chargeMessage: any;
  chargeType: number;
}

export interface IPlayList {
  hasTaste: boolean;
  code: number;
  category: number;
  result: IPlayResult[];
}

export interface IPlayResult {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
}

export interface INewSong {
  code: number;
  category: number;
  result: INewSongResult[];
}

export interface INewSongResult {
  id: number;
  type: number;
  name: string;
  copywriter: any;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: any;
  song: INewSong;
  alg: string;
}
export interface INewSong {
  name: string;
  id: number;
  position: number;
  alias: string[];
  status: number;
  fee: number;
  copyrightId: number;
  disc: string;
  no: number;
  artists: Artist[];
  album: Album;
  starred: boolean;
  popularity: number;
  score: number;
  starredNum: number;
  duration: number;
  playedNum: number;
  dayPlays: number;
  hearTime: number;
  sqMusic?: SqMusic;
  hrMusic?: HrMusic;
  ringtone: string;
  crbt: any;
  audition: any;
  copyFrom: string;
  commentThreadId: string;
  rtUrl: any;
  ftype: number;
  rtUrls: any[];
  copyright: number;
  transName?: string;
  sign: any;
  mark: number;
  originCoverType: number;
  originSongSimpleData?: OriginSongSimpleData;
  single: number;
  noCopyrightRcmd: any;
  rtype: number;
  rurl: any;
  mvid: number;
  bMusic: BMusic;
  mp3Url: any;
  hMusic: HMusic;
  mMusic: MMusic;
  lMusic: LMusic;
  exclusive: boolean;
  privilege: Privilege;
  transNames?: string[];
}

export interface Artist {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
}

export interface Album {
  name: string;
  id: number;
  type: string;
  size: number;
  picId: number;
  blurPicUrl: string;
  companyId: number;
  pic: number;
  picUrl: string;
  publishTime: number;
  description: string;
  tags: string;
  company: string;
  briefDesc: string;
  artist: Artist2;
  songs: any[];
  alias: string[];
  status: number;
  copyrightId: number;
  commentThreadId: string;
  artists: Artist3[];
  subType: string;
  transName?: string;
  onSale: boolean;
  mark: number;
  gapless: number;
  picId_str: string;
  transNames?: string[];
}

export interface Artist2 {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
}

export interface Artist3 {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
}

export interface SqMusic {
  name: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export interface HrMusic {
  name: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export interface OriginSongSimpleData {
  songId: number;
  name: string;
  artists: Artist4[];
  albumMeta: AlbumMeta;
}

export interface Artist4 {
  id: number;
  name: string;
}

export interface AlbumMeta {
  id: number;
  name: string;
}

export interface BMusic {
  name: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export interface HMusic {
  name: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export interface MMusic {
  name: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export interface LMusic {
  name: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
}

export interface Privilege {
  id: number;
  fee: number;
  payed: number;
  st: number;
  pl: number;
  dl: number;
  sp: number;
  cp: number;
  subp: number;
  cs: boolean;
  maxbr: number;
  fl: number;
  toast: boolean;
  flag: number;
  preSell: boolean;
  playMaxbr: number;
  downloadMaxbr: number;
  maxBrLevel: string;
  playMaxBrLevel: string;
  downloadMaxBrLevel: string;
  plLevel: string;
  dlLevel: string;
  flLevel: string;
  rscl: any;
  freeTrialPrivilege: FreeTrialPrivilege;
  chargeInfoList: ChargeInfoList[];
}

export interface FreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
  listenType: any;
}

export interface ChargeInfoList {
  rate: number;
  chargeUrl: any;
  chargeMessage: any;
  chargeType: number;
}
export interface IMvRes {
  code: number;
  category: number;
  result: IMvResult[];
}

export interface IMvResult {
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
  artists: IMvArtist[];
  artistName: string;
  artistId: number;
  alg: string;
}

export interface IMvArtist {
  id: number;
  name: string;
}
