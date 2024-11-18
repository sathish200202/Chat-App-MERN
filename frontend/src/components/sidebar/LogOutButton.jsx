import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogOut from "../../hooks/useLogOut";

const LogOutButton = () => {
  const { loading, logout } = useLogOut();
  return (
    <div className="mt-auto">
      {!loading ? (
        <button
          onClick={logout}
          className="border-2 border-sky-600 bg-slate-200 rounded-lg mt-2 hover:bg-sky-700 "
        >
          <BiLogOut className="w-20 h-6 m-1 text-sky-500 cursor-pointer hover:text-slate-300" />
        </button>
      ) : (
        <span className="loading loading-spinner text-sky-600"></span>
      )}
    </div>
  );
};

export default LogOutButton;
