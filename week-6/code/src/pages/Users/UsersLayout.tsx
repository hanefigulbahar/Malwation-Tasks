import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const UsersLayout = () => {
  const location = useLocation();
  const goBackGHandle = () => window.history.back();
  return (
    <div className="m-5 flex w-full flex-col gap-5 rounded-md border border-gray-100 bg-gray-50 p-10 shadow-md ">
      <div className="rounded-md border border-gray-100 bg-white p-6 shadow-md">
        {location.pathname.length <= 1 ? (
          <div className="flex items-center justify-start gap-2 rounded-md p-3">
            <p className="text-2xl font-semibold text-gray-500">Users</p>
          </div>
        ) : (
          <button
            onClick={goBackGHandle}
            className="flex items-center justify-center gap-2 rounded-md p-3 hover:bg-gray-50"
          >
            <div className="text-xl">Left</div>
            <p>Go Back</p>
          </button>
        )}
      </div>
      <div className="w-full rounded-md border border-gray-100 bg-white p-10 shadow-md">
        <Outlet />
      </div>
    </div>
  );
};

export default UsersLayout;
