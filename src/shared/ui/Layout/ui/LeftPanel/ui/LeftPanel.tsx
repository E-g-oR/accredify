import { FC } from "react";

import { SideNavigation } from "shared/ui/SideNavigation";

import logoImg from "assets/Ellipse 20.png";
import { navigationMenuItems } from "../model";

export const LeftPanel: FC = () => {
  return (
    <div>
      <div className="p-2 mt-2">
        <img src={logoImg} alt="logo" />
      </div>
      <SideNavigation
        items={navigationMenuItems}
        getPath={(item) => item.path}
        render={(item) => item.icon}
      />
    </div>
  );
};
