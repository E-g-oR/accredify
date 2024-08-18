import { FC } from "react";
import { CareerGoal } from "./CareerGoal";
import { RecentDocuments } from "./RecentDocuments";

export const Home: FC = () => {
  return (
    <>
      <div className={"mb-14"}>
        <h1 className={"text-3xl font-bold mb-2"}>Hi, Gerald Goh 👋🏻</h1>
        <p className={"text-slate-500"}>
          Manage your documents issued by SMU Academy or Track your career goal.
        </p>
      </div>
      <div className={"gap-7 flex "}>
        <CareerGoal />
        <RecentDocuments />
      </div>
    </>
  );
};
