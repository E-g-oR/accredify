import { createContext, Dispatch } from "react";

interface IPopoverContext {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}

export const PopoverContext = createContext<IPopoverContext>({
  isOpen: false,
  setIsOpen: () => {},
});
