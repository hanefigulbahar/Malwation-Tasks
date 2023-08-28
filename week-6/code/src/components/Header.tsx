import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@libs/redux/hooks";
import { IReduxUser, userLogout } from "@libs/redux/reducers/user";

import Link from "./ui/Link";
import Button from "./ui/Button";

const Header = () => {
  const dispatch = useAppDispatch();

  const user: IReduxUser = useAppSelector((state) => state.user);

  const [navbarDropdown, setNavbarDropdown] = useState(false);

  const navbarDropdownHandle = () => {
    setNavbarDropdown(!navbarDropdown);
  };

  const logoutHandle = () => {
    dispatch(userLogout());
  };

  return (
    <nav className="border-gray-200 bg-gray-50">
      <div className="grid grid-cols-5 place-items-center p-4 max-lg:grid-cols-2">
        <div className="w-max">
          <Link url="/" color="primary" size="medium" variant="textOnly">
            Home Page
          </Link>
        </div>
        <div className="col-start-5 max-md:col-start-2">
          <ul className="grid grid-cols-3 place-items-center">
            <li>
              <Link
                url={`/users/${user.id ? user.id : "/"}`}
                color="primary"
                size="medium"
                variant="textOnly"
              >
                Profile
              </Link>
            </li>
            <li>
              <div className="relative flex items-center md:order-2">
                <Button
                  onClick={navbarDropdownHandle}
                  color="primary"
                  icon="users"
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
                    <span className="block text-sm text-gray-800">
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
