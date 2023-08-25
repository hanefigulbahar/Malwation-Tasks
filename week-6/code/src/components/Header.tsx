import { useAppDispatch, useAppSelector } from "@libs/redux/hooks";
import { userLogout } from "@libs/redux/reducers/user";
import { useState } from "react";
import Link from "./ui/Link";
import Button from "./ui/Button";

const Header = () => {
  const [navbarDropdown, setNavbarDropdown] = useState(false);
  const user = useAppSelector((state: any) => state.user);
  const dispatch = useAppDispatch();

  const navbarDropdownHandle = () => {
    setNavbarDropdown(!navbarDropdown);
  };

  const logoutHandle = () => {
    dispatch(userLogout());
  };

  return (
    <nav className="border-gray-200 bg-gray-50">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <div>
          <Link url="/" color="primary" size="medium" variant="textOnly">
            Home Page
          </Link>
        </div>

        <div className="block" id="navbar-solid-bg">
          <ul className="flex flex-row items-center justify-center rounded-lg bg-gray-50 font-medium md:mt-0 md:space-x-4 md:border-0 md:bg-transparent md:dark:bg-transparent">
            <li>
              <Link
                url="/dashboard"
                color="primary"
                size="medium"
                variant="textOnly"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                url="/about"
                color="primary"
                size="medium"
                variant="textOnly"
              >
                About
              </Link>
            </li>
            <li>
              <div className="relative flex items-center md:order-2">
                <Button
                  onClick={navbarDropdownHandle}
                  color="primary"
                  icon="eyeOn"
                  size="medium"
                  variant="secondary"
                />
                <div
                  className={
                    navbarDropdown
                      ? "absolute right-0.5 top-11 my-4 w-32 divide-y divide-gray-100 rounded-lg bg-gray-50 text-base shadow "
                      : "hidden"
                  }
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-800 dark:text-white">
                      {user.name}
                    </span>
                  </div>
                  <Button
                    onClick={logoutHandle}
                    color="primary"
                    size="small"
                    variant="textOnly"
                  >
                    Sign out
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
