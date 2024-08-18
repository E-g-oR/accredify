import { IConfig } from "shared/ui/Table";
import { sampleDocumentData } from "./documentsSampleData";

export const tableConfig: ReadonlyArray<
  IConfig<(typeof sampleDocumentData.data)[number]>
> = [
  {
    header: "Document name",
    key: "name",
    render: (item) => <span className={"font-bold"}>{item.document_name}</span>,
    size: "1fr",
  },
  {
    header: "Received on",
    key: "received",
    render: (item) => <span>{item.received_on}</span>,
    size: "auto",
  },
  {
    header: "",
    key: "action",
    render: () => <button>Lick me</button>,
    size: "80px",
  },
];
