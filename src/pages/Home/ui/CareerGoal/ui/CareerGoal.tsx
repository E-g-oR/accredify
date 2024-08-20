import { FC } from "react";

import { Link } from "shared/ui/Link";
import { WidgetLayout } from "shared/ui/WidgetLayout";
import { CircularProgress } from "shared/ui/CircularProgress";
import { useFetch } from "shared/lib";
import { Show } from "shared/ui/Show";
import { Skeleton } from "shared/ui/Skeleton";
import { IResponsePaginated } from "shared/model/types/Response";
import { IGoal } from "src/entities/Goal/model/types/IGoal";

export const CareerGoal: FC = () => {
  const { data, isLoading } = useFetch<IResponsePaginated<IGoal>>("goals.json");
  const goal = data?.data[0];
  return (
    <WidgetLayout title={"Career goal"}>
      <div className={"flex flex-col gap-6 items-center text-center"}>
        <span className={"text-sm font-bold text-slate-400"}>
          Your progress
        </span>
        <CircularProgress value={goal?.progress || 0} />
        <span>
          I want to become a<br />
          <Show
            when={!isLoading}
            fallback={<Skeleton className={"w-full h-7"} />}
          >
            <b className={"text-xl"}>{goal?.name}</b>
          </Show>
        </span>
        <Link to={"/insights"}>View insights</Link>
      </div>
    </WidgetLayout>
  );
};
