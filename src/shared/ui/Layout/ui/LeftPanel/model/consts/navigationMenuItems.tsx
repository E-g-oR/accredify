import { ReactNode } from "react";
import DocumentsIcon from "./assets/icons/documents.svg?react";
import HomeIcon from "./assets/icons/home.svg?react";
import InsightsIcon from "./assets/icons/insights.svg?react";
import SecurityIcon from "./assets/icons/security.svg?react";
import SettingsIcon from "./assets/icons/settings.svg?react";

export const navigationMenuItems: ReadonlyArray<NavigationMenuItem> = [
  {
    title: "Home",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    title: "Documents",
    icon: <DocumentsIcon />,
    path: "/documents",
  },
  {
    title: "Insights",
    icon: <InsightsIcon />,
    path: "/insights",
  },
  {
    title: "Privacy",
    icon: <SecurityIcon />,
    path: "/privacy",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
  },
];

interface NavigationMenuItem {
  title: string;
  path: string;
  icon: ReactNode;
}
