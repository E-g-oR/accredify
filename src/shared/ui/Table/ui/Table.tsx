import { ReactNode } from "react";
import { IConfig, tableContext } from "./tableContext";

export function Table<T>({
  children,
  config,
  gap,
  loading,
}: Props<T>): JSX.Element {
  return (
    // @ts-expect-error - default config item type T is unknown
    <tableContext.Provider value={{ config, loading, gap }}>
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
