import { FC } from "react";

import { Link } from "shared/ui/Link";
import { WidgetLayout } from "shared/ui/WidgetLayout";
import { CircularProgress } from "shared/ui/CircularProgress";

export const CareerGoal: FC = () => {
  return (
    <WidgetLayout title={"Career goal"}>
      <div className={"flex flex-col gap-6 items-center text-center"}>
        <span className={"text-sm font-bold text-slate-400"}>
          Your progress
        </span>
        <CircularProgress value={90} />
        <span>
          I want to become a<br />
          <b className={"text-xl"}>Tax Manager</b>
        </span>
        <Link to={"/insights"}>View insights</Link>
      </div>
    </WidgetLayout>
  );
};
