import { FC } from "react";
import { AccountDropDown } from "./AccountDropDown";

export const AppBar: FC = () => {
  return (
    <div className={"py-3 px-8 border-b flex justify-end"}>
      <AccountDropDown />
    </div>
  );
};
