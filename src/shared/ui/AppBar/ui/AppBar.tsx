import { FC, ReactNode } from "react";

export const AppBar: FC<Props> = ({ children }) => (
  <div className={"py-3 px-8 border-b flex justify-end"}>{children}</div>
);

interface Props {
  children?: ReactNode;
}
