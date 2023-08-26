import { useState } from "react";
import Button from "./ui/Button";
import Link from "./ui/Link";
import { useAppDispatch } from "@libs/redux/hooks";
import { userLogout } from "@libs/redux/reducers/user";

const SideBar = () => {
  const dispatch = useAppDispatch();
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const toggleHamburger = () => {
    setHamburgerMenu(!hamburgerMenu);
  };

  const logoutHandle = () => {
    dispatch(userLogout());
  };

  return (
    <aside
      id="default-sidebar"
      className="sticky top-0 h-screen w-max text-center"
      aria-label="Sidebar"
    >
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
