import { FC, ReactNode, useContext } from "react";
import { PopoverContext } from "./PopoverContext";
import { Show } from "shared/ui/Show";
import { classNames } from "shared/lib";

export const PopoverContent: FC<Props> = ({ children, className }) => {
  const { isOpen } = useContext(PopoverContext);
  return (
    <Show when={isOpen}>
      <div
        className={classNames(
          "p-3 rounded shadow-md absolute bg-white top-full right-0",
          className
        )}
      >
        {children}
      </div>
    </Show>
  );
};

interface Props {
  children: ReactNode;
  className?: string;
}
