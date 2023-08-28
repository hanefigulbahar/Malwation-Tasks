import { Outlet } from "react-router-dom";

import Button from "@components/ui/Button";

const UsersLayout = () => {
  const goBackHandle = () => window.history.back();

  return (
    <div className="m-5 grid w-full grid-cols-1 grid-rows-5 gap-5 rounded-md border border-gray-100 bg-gray-50 p-10 shadow-md max-md:gap-3 max-md:p-5 ">
      <div className="grid  grid-rows-1 items-center rounded-md  border border-gray-100 bg-white px-6 py-3 shadow-md">
        <div className="w-max">
          <Button
            onClick={goBackHandle}
            leftIcon="arrowLeft"
            size="medium"
            color="primary"
            variant="textOnly"
          >
            Go Back
          </Button>
        </div>
      </div>
      <div className="row-span-4 rounded-md border border-gray-100 bg-white p-10 shadow-md">
        <Outlet />
      </div>
    </div>
  );
};

export default UsersLayout;
