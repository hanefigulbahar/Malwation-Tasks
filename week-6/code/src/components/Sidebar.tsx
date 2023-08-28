import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@libs/redux/hooks";
import { userLogout } from "@libs/redux/reducers/user";

import Link from "./ui/Link";
import Button from "./ui/Button";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loginUserPermissions = useAppSelector(
    (state) => state.user.permissions
  );

  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const toggleHamburger = () => {
    setHamburgerMenu(!hamburgerMenu);
  };

  const logoutHandle = () => {
    dispatch(userLogout());
  };

  const createNavigateHandler = () => {
    if (loginUserPermissions?.includes("Create")) {
      navigate("/create");
    } else {
      toast.error("You do not have user create permission!");
    }
  };

  return (
    <aside className="sticky top-0 h-screen w-max text-center">
      <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 ">
        <ul className="space-y-3 font-medium">
          <li className="flex justify-start">
            <Button
              color="primary"
              variant="textOnly"
              size="medium"
              icon="menu"
              onClick={toggleHamburger}
            />
          </li>
          <li>
            {hamburgerMenu ? (
              <Link
                url="/"
                color="primary"
                variant="textOnly"
                size="medium"
                icon="home"
              />
            ) : (
              <Link
                textStyle="max-md:hidden"
                url="/"
                leftIcon="home"
                variant="textOnly"
                size="medium"
                color="primary"
              >
                Home
              </Link>
            )}
          </li>
          <li>
            {hamburgerMenu ? (
              <Button
                onClick={createNavigateHandler}
                color="primary"
                variant="textOnly"
                size="medium"
                icon="create"
              />
            ) : (
              <Button
                onClick={createNavigateHandler}
                textStyle="max-md:hidden"
                leftIcon="create"
                variant="textOnly"
                size="medium"
                color="primary"
              >
                Create
              </Button>
            )}
          </li>

          <li>
            {hamburgerMenu ? (
              <Button
                onClick={logoutHandle}
                color="primary"
                size="medium"
                variant="textOnly"
                icon="logout"
              />
            ) : (
              <Button
                onClick={logoutHandle}
                color="primary"
                size="medium"
                variant="textOnly"
                leftIcon="logout"
                textStyle="max-md:hidden"
              >
                Logout
              </Button>
            )}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
