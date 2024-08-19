import { FC } from "react";
import { Avatar } from "shared/ui/Avatar";
import { Button } from "shared/ui/Button";
import Logout from "assets/icons/logout.svg?react";
import { Popover, PopoverContent, PopoverTrigger } from "shared/ui/Popover";

const username = "Gerald Goh";

export const AccountDropDown: FC = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar username={username} />
        {username}
      </PopoverTrigger>
      <PopoverContent className={"flex flex-col gap-4"}>
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
      </PopoverContent>
    </Popover>
  );
};
