import { FC, HTMLAttributes } from "react";
import { classNames } from "../../../lib";

export const Button: FC<Props & HTMLAttributes<HTMLButtonElement>> = ({
  isOutlined = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(
        "text-sm p-2 flex gap-2 items-center rounded hover:bg-primary-50  active:bg-primary-100 transition focused:outline outline-primary-400 outline-1 outline-offset-2",
        isOutlined && "border",
        props.className
      )}
    />
  );
};

interface Props {
  isOutlined?: boolean;
}
