import { FC, ReactNode } from "react";

export const WidgetLayout: FC<Props> = ({
  title,
  addictionalAction,
  children,
  className,
}) => {
  return (
    <div className={className} data-cy={"cypress-widget-layout"}>
      <div className="flex justify-between mb-4 items-baseline">
        <h2 className="text-xl font-bold capitalize">{title}</h2>
        {addictionalAction}
      </div>
      <div className={"border rounded-md px-6 py-8"}>{children}</div>
    </div>
  );
};

interface Props {
  title: string;
  addictionalAction?: ReactNode;
  children?: ReactNode;
  className?: string;
}
