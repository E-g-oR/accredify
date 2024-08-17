import { FC } from "react";
import { Link } from "react-router-dom";

export const NotFound: FC = () => {
  return (
    <div className={"flex flex-col gap-5 items-center"}>
      <h1 className={"text-2xl font-bold"}>Not found</h1>
      <p className={"text-lg text-slate-400"}>
        Sorry, we could not find this page
      </p>
      <Link to={"/"}>Go home</Link>
    </div>
  );
};
