import { FC, useState } from "react";
import { classNames } from "shared/lib";
import { Avatar } from "shared/ui/Avatar";
import { Button } from "shared/ui/Button";
import Logout from "assets/icons/logout.svg?react";

const username = "Gerald Goh";

export const AccountDropDown: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={"relative"}>
      <Button isOutlined onClick={() => setIsOpen((prev) => !prev)}>
        <Avatar username={username} />
        {username}
      </Button>
      <div
        className={classNames(
          "absolute top-12 right-0 rounded shadow-md bg-white p-3 flex flex-col gap-4 transition",
          isOpen ? "opacity-1 visible" : "opacity-0 hidden"
        )}
      >
        <div className={"p-3 w-48"}>
          <div className="flex items-center gap-3">
            <Avatar username={username} large />
            <div className="flex-0">
              <p className={"font-bold"}>Gerald Goh</p>
              <p className={"text-slate-500"}>Recipient</p>
            </div>
          </div>
        </div>
        <div className="border-b" />
        <Button isOutlined>
          <Logout />
          Log out
        </Button>
      </div>
    </div>
  );
};
