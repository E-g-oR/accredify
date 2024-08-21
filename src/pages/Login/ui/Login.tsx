import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "shared/ui/Button";

export const Login: FC = () => {
  const navigate = useNavigate();
  return (
    <div
      className={
        "w-screen h-screen bg-slate-900 flex items-center justify-center"
      }
    >
      <div
        className={
          "border rounded-2xl p-5 bg-white text-center flex flex-col gap-3 items-center"
        }
      >
        <h1 className={"text-2xl font-bold"}>Log in to Accredify</h1>
        <Button isOutlined onClick={() => navigate("/")}>
          Log in
        </Button>
      </div>
    </div>
  );
};
