import { FC, ReactNode } from "react";

export const Show: FC<Props> = ({ children, fallback, when }) => {
  return when ? children : fallback || null;
};

interface Props {
  when: boolean;
  fallback?: ReactNode;
  children: ReactNode;
}
