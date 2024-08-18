import { IConfig } from "shared/ui/Table";
import { sampleDocumentData } from "./documentsSampleData";
import { format } from "date-fns";

export const tableConfig: ReadonlyArray<
  IConfig<(typeof sampleDocumentData.data)[number]>
> = [
  {
    header: "Document name",
    key: "name",
    render: (item) => (
      <p className={"font-bold max-w-96 line-clamp-1 text-ellipsis"}>
        {item.document_name}
      </p>
    ),
    size: "1fr",
  },
  {
    header: "Received on",
    key: "received",
    render: (item) =>
      item.received_on && format(item.received_on, "dd MMM yyyy"),
    size: "auto",
  },
  {
    header: "",
    key: "action",
    render: () => <button>Lick me</button>,
    size: "80px",
  },
];
