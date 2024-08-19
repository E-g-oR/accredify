import { FC } from "react";
import { classNames } from "shared/lib";
import { Show } from "shared/ui/Show";

export const Avatar: FC<Props> = ({ username = "", picture, large }) => {
  console.log(username);

  const letters = username
    .split(" ")
    .map((word) => word[0])
    .join(" ")
    .toUpperCase();
  return (
    <div
      className={classNames(
        "bg-primary-600 rounded-full flex items-center justify-center relative overflow-hidden",
        large ? "w-12 h-12" : "w-6 h-6"
      )}
    >
      <Show when={!!picture}>
        <img
          className={"absolute w-full h-full left-0 top-0"}
          src={picture}
          alt={username}
        />
      </Show>
      <span
        className={classNames(
          "text-white tracking-tighter",
          !large && "text-xs"
        )}
      >
        {letters}
      </span>
    </div>
  );
};

interface Props {
  username: string;
  picture?: string;
  large?: boolean;
}
