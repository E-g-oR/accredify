import { FC } from "react";
import { Link } from "react-router-dom";
import { Table, TableHead, TableRow } from "shared/ui/Table";
import { WidgetLayout } from "shared/ui/WidgetLayout";
import { sampleDocumentData, tableConfig } from "../model";

export const RecentDocuments: FC = () => {
  return (
    <WidgetLayout
      className={"flex-1"}
      title={"Recent documents"}
      addictionalAction={
        <Link to={"/documents"} className={"text-primary-500 font-bold"}>
          View all documents
        </Link>
      }
    >
      <Table config={tableConfig}>
        <TableHead />
        {sampleDocumentData.data.map((document) => (
          <TableRow key={document.id} row={document} />
        ))}
      </Table>
    </WidgetLayout>
  );
};
