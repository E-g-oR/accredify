import { FC } from "react";

import { Link } from "shared/ui/Link";
import { useFetch } from "shared/lib";
import { IDocument } from "src/entities/Document";
import { WidgetLayout } from "shared/ui/WidgetLayout";
import { Table, TableHead, TableRow } from "shared/ui/Table";
import { IResponsePaginated } from "shared/model/types/Response";

import { tableConfig } from "../model";

export const RecentDocuments: FC = () => {
  const { data } = useFetch<IResponsePaginated<IDocument>>("documents.json");
  return (
    <WidgetLayout
      className={"flex-1"}
      title={"Recent documents"}
      addictionalAction={<Link to={"/documents"}>View all documents</Link>}
    >
      <Table config={tableConfig}>
        <TableHead />
        {data?.data.map((document) => (
          <TableRow key={document.id} row={document} />
        ))}
      </Table>
    </WidgetLayout>
  );
};
