import { FC, HTMLProps } from "react";
import { LinkProps, Link as RouterLink } from "react-router-dom";
import { classNames } from "shared/lib";

export const Link: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = (props) => {
  return (
    <RouterLink
      {...props}
      className={classNames(
        "text-sm font-bold capitalize text-primary-500 hover:text-primary-400 hover:underline underline-offset-2 active:text-primary-700",
        props.className
      )}
    />
  );
};
