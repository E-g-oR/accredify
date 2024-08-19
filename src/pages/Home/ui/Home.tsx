import { FC } from "react";

import { CareerGoal } from "./CareerGoal";
import { RecentDocuments } from "./RecentDocuments";
import { useFetch } from "shared/lib";
import { Show } from "shared/ui/Show";
import { Skeleton } from "shared/ui/Skeleton";
import { IResponse } from "shared/model/types/Response";
import { IUser } from "src/entities/User";

export const Home: FC = () => {
  const { data, isLoading } = useFetch<IResponse<IUser>>("user.json");
  return (
    <>
      <div className={"mb-14"}>
        <Show when={!isLoading} fallback={<Skeleton className={"w-80 h-8"} />}>
          <h1 className={"text-3xl font-bold mb-2"}>
            Hi, {data?.data?.name || "User"} 👋🏻
          </h1>
        </Show>
        <p className={"text-slate-500"}>
          Manage your documents issued by SMU Academy or Track your career goal.
        </p>
      </div>
      <div className={"gap-7 flex "}>
        <Show when={!!data && !data.data.current_organisation.is_personal}>
          <CareerGoal />
        </Show>
        <RecentDocuments />
      </div>
    </>
  );
};
