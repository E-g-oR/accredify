import { FC, ReactNode, useState } from "react";
import { PopoverContext } from "./PopoverContext";

export const Popover: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <PopoverContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={"relative"}>{children}</div>
    </PopoverContext.Provider>
  );
};

interface Props {
  children: ReactNode;
}
