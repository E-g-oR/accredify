import { createContext, ReactNode } from "react";

export interface IConfig<T> {
  key: string | number;
  header: string;
  render: (row: T) => ReactNode;
  size: string;
}

export interface ITableContext<T> {
  gap?: number;
  config: ReadonlyArray<IConfig<T>>;
  loading?: boolean;
}

export const tableContext = createContext<ITableContext<unknown>>({
  gap: 0,
  config: [],
  loading: false,
});
