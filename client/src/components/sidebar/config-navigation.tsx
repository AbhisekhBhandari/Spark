import { ReactNode } from "react";
import SvgColor from "../svg-color";

 const icon = (name: string, height = 1, width = 1) => (
  <SvgColor src={`/assets/icons/nav/${name}.svg`} sx={{ height, width }} />
);

const ICONS = {
  home: icon("Home"),
  search: icon('Search'),
  message:icon("Message"),
  notification:icon("Notification"),
  watch: icon("Watch")
};

type NAV_DATA_TYPE = {
  title: string;
  path: string;
  icons: ReactNode;
};

export const NAV_DATA: NAV_DATA_TYPE[] = [
  {
    title: "Home",
    path: "/",
    icons: ICONS.home,
  },
  {
    title: "Search",
    path: "/search",
    icons: ICONS.search,
  },
  {
    title: "Messages",
    path: "/message",
    icons: ICONS.message,
  },
  {
    title: "Notifications",
    path: "/notification",
    icons: ICONS.notification,
  },
  {
    title: "Watch",
    path: "/path",
    icons: ICONS.watch,
  },
];
