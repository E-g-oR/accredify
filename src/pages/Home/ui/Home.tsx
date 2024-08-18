import { FC } from "react";
import { Link } from "react-router-dom";

export const Home: FC = () => {
  return (
    <>
      <div className="mb-14">
        <h1 className="text-3xl font-bold">Hi, Gerald Goh 👋🏻</h1>
        <p className="text-slate-500">
          Manage your documents issued by SMU Academy or Track your career goal.
        </p>
      </div>
      <div>
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold capitalize">Recent documents</h2>
          <Link
            to={"/documents"}
            className="text-primary-600 font-bold capitalize"
          >
            View all documents
          </Link>
        </div>
        <div className="border rounded-md px-6 py-8">Document name</div>
      </div>
    </>
  );
};
