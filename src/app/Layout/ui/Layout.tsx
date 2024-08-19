import { FC } from "react";
import { LeftPanel } from "./LeftPanel";
import { AppBar } from "shared/ui/AppBar";
import { Outlet } from "react-router-dom";
import { AccountDropDown } from "./AccountDropDown";

export const Layout: FC = () => {
  return (
    <div className={"w-screen h-screen bg-slate-900 flex"}>
      <LeftPanel />
      <div className={"bg-white rounded-l-2xl flex-1"}>
        <AppBar>
          <AccountDropDown />
        </AppBar>
        <div className={"pt-12 px-36"}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
