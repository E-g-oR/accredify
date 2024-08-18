import { FC } from "react";

import { Link } from "shared/ui/Link";
import { WidgetLayout } from "shared/ui/WidgetLayout";
import { Table, TableHead, TableRow } from "shared/ui/Table";

import { sampleDocumentData, tableConfig } from "../model";

export const RecentDocuments: FC = () => {
  return (
    <WidgetLayout
      className={"flex-1"}
      title={"Recent documents"}
      addictionalAction={<Link to={"/documents"}>View all documents</Link>}
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
