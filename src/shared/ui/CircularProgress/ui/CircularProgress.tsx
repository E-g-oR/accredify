import { FC } from "react";
import { useProgressValue } from "../lib";

export const CircularProgress: FC<Props> = ({
  value = 0,
  radius = 90,
  strokeWidth = 12,
}) => {
  const { strokeDasharray, strokeDashoffset } = useProgressValue(value);
  const width = radius * 2 + strokeWidth * 2;
  return (
    <div className={"flex items-center justify-center"}>
      <span className={"absolute text-3xl font-bold text-primary-600"}>
        {value} %
      </span>
      <svg
        xmlns={"http://www.w3.org/2000/svg"}
        width={width}
        height={width}
        viewBox={`0 0 ${width} ${width}`}
      >
        <circle
          className={"stroke-slate-200"}
          cx={width / 2}
          cy={width / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill={"none"}
        />
        <circle
          className={"stroke-primary-600"}
          cx={width / 2}
          cy={width / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill={"none"}
          strokeDashoffset={strokeDashoffset}
          strokeDasharray={strokeDasharray}
          strokeLinecap={"round"}
        />
      </svg>
    </div>
  );
};

interface Props {
  value: number;
  radius?: number;
  strokeWidth?: number;
}
