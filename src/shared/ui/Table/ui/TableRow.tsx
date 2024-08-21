import { useContext } from "react";
import { tableContext } from "./tableContext";

export function TableRow<T>({ row }: Props<T>) {
  const { config } = useContext(tableContext);
  const gridTemplateColumns = config.map((column) => column.size).join(" ");
  return (
    <div
      className={"grid items-center border-b text-sm"}
      style={{ gridTemplateColumns }}
      data-testid={"table-row"}
    >
      {config.map((column) => (
        <div
          data-testid={"table-cell"}
          key={column.key}
          className={"px-4 py-5"}
        >
          {column.render(row)}
        </div>
      ))}
    </div>
  );
}
interface Props<T> {
  row: T;
}
