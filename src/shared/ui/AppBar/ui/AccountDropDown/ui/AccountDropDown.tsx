import React, { FC, useState } from "react";
import { classNames } from "shared/lib";
import { Button } from "shared/ui/Button";

export const AccountDropDown: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={"relative"}>
      <Button isOutlined onClick={() => setIsOpen((prev) => !prev)}>
        Gerald Goh
      </Button>
      <div
        className={classNames(
          "absolute top-12 right-0 rounded shadow-md bg-white p-3 flex flex-col gap-4 transition",
          isOpen ? "opacity-1 visible" : "opacity-0 hidden"
        )}
      >
        <div className={"p-3 w-48"}>
          <div className="flex items-center gap-3">
            <div className="flex flex-0 items-center justify-center bg-indigo-600 p-2 rounded-full text-white">
              GG
            </div>
            <div className="flex-0">
              <p className={"font-bold"}>Gerald Goh</p>
              <p className={"text-slate-500"}>Recipient</p>
            </div>
          </div>
        </div>
        <div className="border-b" />
        <button className="p-2 rounded border text-sm">Log out</button>
      </div>
    </div>
  );
};
