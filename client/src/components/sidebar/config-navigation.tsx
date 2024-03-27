import { ReactNode } from "react";
import SvgColor from "../svg-color";
import Image from "next/image";
import Home from "../../assets/icons/nav/Home.svg";
import Search from "../../assets/icons/nav/Search.svg";
import Message from "../../assets/icons/nav/Message.svg";
import Notification from "../../assets/icons/nav/Notification.svg";
import Watch from "../../assets/icons/nav/Watch.svg";

const icon = (name: string, height = 40, width = 40) => (
  <Image src={name} height={height} width={width} alt={name} />
);

const ICONS = {
  home: icon(Home),
  search: icon(Search),
  message: icon(Message),
  notification: icon(Notification),
  watch: icon(Watch),
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
