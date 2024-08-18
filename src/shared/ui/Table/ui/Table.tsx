import { ReactNode } from "react";
import { IConfig, tableContext } from "./tableContext";

export function Table<T>({ children, ...contextValue }: Props<T>): JSX.Element {
  return (
    <tableContext.Provider value={contextValue}>
      {children}
    </tableContext.Provider>
  );
}

interface Props<T> {
  config: ReadonlyArray<IConfig<T>>;
  gap?: number;
  loading?: boolean;
  children: ReactNode;
}
