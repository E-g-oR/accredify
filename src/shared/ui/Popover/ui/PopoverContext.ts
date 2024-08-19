import { createContext, Dispatch, SetStateAction } from "react";

interface IPopoverContext {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const PopoverContext = createContext<IPopoverContext>({
  isOpen: false,
  setIsOpen: () => {},
});
