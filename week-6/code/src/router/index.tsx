import useLogin from "@hooks/useLogin";
import Login from "@pages/Login";
import PageLayout from "@pages/PageLayout";
import SignIn from "@pages/SignIn";

import User from "@pages/Users/User";

import UsersLayout from "@pages/Users/UsersLayout";
import Users from "@pages/Users/partials/UserListTable";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const router = (isLogin: boolean) => {
  return createBrowserRouter([
    {
      path: "/",
      element: isLogin ? <PageLayout /> : <Navigate to="/login" replace />,
      caseSensitive: true,
      errorElement: <div>hata</div>,
      children: [
        {
          index: true,
          element: <Navigate to="/users" replace />,
        },
        {
          path: "users",
          element: <UsersLayout />,
          caseSensitive: true,
          children: [
            {
              index: true,
              element: <Users />,
              errorElement: <div>hata</div>,
            },
            {
              path: ":userId",
              element: <User />,
              caseSensitive: true,
              errorElement: <div>hata</div>,
            },
          ],
        },

        {
          path: "*",
          element: <div>Not found</div>,
          caseSensitive: true,
        },
      ],
    },
    {
      path: "login",
      element: !isLogin ? <Login /> : <Navigate to="/" replace />,
      errorElement: <div>hata</div>,
      caseSensitive: true,
    },
    {
      path: "register",
      element: isLogin ? <Navigate to="/" replace /> : <SignIn />,
      errorElement: <div>hata</div>,
      caseSensitive: true,
    },
  ]);
};

function Router() {
  const isLogin = useLogin();

  return <RouterProvider router={router(isLogin)} />;
}

export default Router;
