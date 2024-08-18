import { FC, useContext } from "react";
import { tableContext } from "./tableContext";

export const TableHead: FC = () => {
  const { config } = useContext(tableContext);
  const gridTemplateColumns = config.map((column) => column.size).join(" ");
  return (
    <div
      className={"grid border-b font-bold text-slate-400 text-sm capitalize"}
      style={{ gridTemplateColumns }}
    >
      {config.map((column) => (
        <span key={column.key} className={"pb-5 px-4"}>
          {column.header}
        </span>
      ))}
    </div>
  );
};
