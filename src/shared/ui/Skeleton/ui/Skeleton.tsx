import { FC } from "react";
import { classNames } from "shared/lib";

export const Skeleton: FC<Props> = ({ className }) => {
  return (
    <div
      className={classNames(
        "w-24 h-5 bg-slate-200 animate-pulse rounded-md",
        className
      )}
    />
  );
};

interface Props {
  className?: string;
}
