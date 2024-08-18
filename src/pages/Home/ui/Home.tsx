import { FC } from "react";
import { Link } from "react-router-dom";
import { WidgetLayout } from "shared/ui/WidgetLayout";

export const Home: FC = () => {
  return (
    <>
      <div className="mb-14">
        <h1 className="text-3xl font-bold">Hi, Gerald Goh 👋🏻</h1>
        <p className="text-slate-500">
          Manage your documents issued by SMU Academy or Track your career goal.
        </p>
      </div>
      <div className={"gap-7 grid grid-cols-[260px_minmax(900px,_1fr)]"}>
        <WidgetLayout title={"Career goal"}> your propgress</WidgetLayout>
        <WidgetLayout
          title={"Recent documents"}
          addictionalAction={
            <Link to={"/documents"} className="text-primary-500 font-bold">
              View all documents
            </Link>
          }
        >
          Documents table
        </WidgetLayout>
      </div>
    </>
  );
};
