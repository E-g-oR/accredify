import { FC } from "react";

import { Avatar } from "shared/ui/Avatar";
import { Button } from "shared/ui/Button";
import { useUserStore } from "shared/lib";
import Logout from "assets/icons/logout.svg?react";
import { Popover, PopoverContent, PopoverTrigger } from "shared/ui/Popover";

export const AccountDropDown: FC = () => {
  const user = useUserStore((state) => state.user);
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar
          username={user?.name || "user"}
          picture={user?.profile_picture_url}
        />
        {user?.name || "user"}
      </PopoverTrigger>
      <PopoverContent className={"flex flex-col gap-4"}>
        <div className={"p-3 w-48"}>
          <div className="flex items-center gap-3">
            <Avatar
              username={user?.name || "user"}
              picture={user?.profile_picture_url}
              large
            />
            <div className={"flex-0"}>
              <p className={"font-bold"}>{user?.name || "user"}</p>
              <p className={"text-slate-500"}>Recipient</p>
            </div>
          </div>
        </div>
        <div className={"border-b"} />
        <Button isOutlined>
          <Logout />
          Log out
        </Button>
      </PopoverContent>
    </Popover>
  );
};
