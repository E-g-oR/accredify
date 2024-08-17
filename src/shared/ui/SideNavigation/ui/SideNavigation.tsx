import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { classNames } from "../../../lib";

export function SideNavigation<T>({ items, render, getPath }: Props<T>) {
  return (
    <nav className={"flex flex-col gap-2 mt-7"}>
      {items.map((item) => (
        <li key={getPath(item)} className={"list-none flex"}>
          <NavLink
            className={({ isActive }) =>
              classNames(
                "fill-slate-200 hover:fill-white hover:bg-slate-800 transition p-4",
                isActive && "bg-slate-800 fill-white"
              )
            }
            to={getPath(item)}
          >
            {render(item)}
          </NavLink>
        </li>
      ))}
    </nav>
  );
}

interface Props<T> {
  items: ReadonlyArray<T>;
  render: (item: T) => ReactNode;
  getPath: (item: T) => string;
}
