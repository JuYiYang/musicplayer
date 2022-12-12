interface Iaccount {
  id: number;
  userName: string;
  type: number;
  status: number;
  whitelistAuthority: number;
  createTime: number;
  salt: string;
  tokenVersion: number;
  ban: number;
  baoyueVersion: number;
  donateVersion: number;
  vipType: number;
  viptypeVersion: number;
  anonimousUser: boolean;
  uninitialized: boolean;
}

interface Ibindings {
  bindingTime: number;
  refreshTime: number;
  tokenJsonStr: string;
  expiresIn: number;
  expired: boolean;
  url: string;
  userId: number;
  id: number;
  type: number;
}

export interface Iprofile {
  followed: boolean;
  backgroundUrl: string;
  backgroundImgIdStr: string;
  avatarImgIdStr: string;
  userType: number;
  backgroundImgId: number;
  vipType: number;
  authStatus: number;
  djStatus: number;
  detailDescription: string;
  experts: any;
  expertTags: any;
  accountStatus: number;
  nickname: string;
  birthday: number;
  gender: number;
  province: number;
  city: number;
  avatarImgId: number;
  avatarUrl: string;
  defaultAvatar: boolean;
  mutual: boolean;
  remarkName: any;
  userId: number;
  description: string;
  signature: string;
  authority: number;
  avatarImgId_str: string;
  followeds: number;
  follows: number;
  eventCount: number;
  avatarDetail: any;
  playlistCount: number;
  playlistBeSubscribedCount: number;
}

export interface IloginPhone {
  account: Iaccount;
  bindings: Ibindings[];
  code: number;
  cookie: string;
  profile: Iprofile;
  token: string;
}

export interface IQRlogin {
  code: number;
  unikey: string;
}
export interface IqrImg {
  qrurl: string;
  qrimg: string;
}
export interface IqrStatus {
  code: number;
  message?: string;
  cookie?: string;
}

export interface IqrStatusBack {
  key: any;
  qrimg: boolean;
}
