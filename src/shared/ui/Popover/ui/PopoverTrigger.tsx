import { FC, ReactNode, useContext } from "react";
import { PopoverContext } from "./PopoverContext";
import { Button } from "shared/ui/Button";

export const PopoverTrigger: FC<Props> = ({
  children = "Open popover",
  className,
}) => {
  const { setIsOpen } = useContext(PopoverContext);
  const toggleIsOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <Button onClick={toggleIsOpen} isOutlined className={className}>
      {children}
    </Button>
  );
};

interface Props {
  children: ReactNode;
  className?: string;
}
