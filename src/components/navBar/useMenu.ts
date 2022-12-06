import { reactive, ref } from "vue";
import {
  CrossRingTwo,
  MusicCd,
  CarouselVideo,
  Fm,
  OvalLoveTwo,
  Airplay,
  DownloadComputer,
  PlayTwo,
} from "@icon-park/vue-next";
import type { Icon } from "@icon-park/vue-next/lib/runtime";
interface IMenuItem {
  name: string;
  key: string;
  icon?: Icon;
}

interface IMenus extends IMenuItem {
  children?: IMenuItem[];
}

export const useMenu = () => {
  // eslint-disable-next-line prefer-const
  let currentKey = ref<string>("");

  const menuList = reactive<IMenus[]>([
    {
      name: "在线音乐",
      key: "abc",
      children: [
        { name: "推荐", key: "ac", icon: CrossRingTwo },
        { name: "音乐馆", key: "abc", icon: MusicCd },
        { name: "视频", key: "ab", icon: CarouselVideo },
        { name: "电台", key: "bc", icon: Fm },
      ],
    },
    {
      name: "我的音乐",
      key: "dfg",
      children: [
        { name: "我喜欢", key: "df", icon: OvalLoveTwo },
        { name: "本地歌曲", key: "gg", icon: Airplay },
        { name: "下载歌曲", key: "dd", icon: DownloadComputer },
        { name: "最近播放", key: "dg", icon: PlayTwo },
      ],
    },
  ]);

  const click = (key: string) => {
    currentKey.value = key;
  };

  return {
    menuList,
    currentKey,
    click,
  };
};
