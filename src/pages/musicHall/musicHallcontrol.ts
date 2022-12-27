import { ref, watch } from "vue";

import { useRoute, useRouter } from "vue-router";

type Menus = {
  label: string;
  name: string;
};

export function useMusicHallMenu() {
  const route = useRoute();

  const router = useRouter();

  const activeMenuName = ref<string>("");

  const menus: Menus[] = [
    {
      label: "精选",
      name: "handpick",
    },
    {
      label: "有声电台",
      name: "soundStation",
    },
    {
      label: "排行",
      name: "rankList",
    },
    {
      label: "歌手",
      name: "artist",
    },
    {
      label: "分类歌单",
      name: "category",
    },
    {
      label: "数字专辑",
      name: "figureCd",
    },
  ];

  const handleMenuClick = ({ paneName }: any) => {
    // activeMenuName.value = paneName;
    router.push({ name: paneName, replace: true });
  };

  watch(
    () => route.name,
    () => {
      if (route.meta?.isMenuChildren) return;
      activeMenuName.value = (route?.name as string) || "";
    }
  );

  return {
    menus,
    activeMenuName,
    handleMenuClick,
  };
}
