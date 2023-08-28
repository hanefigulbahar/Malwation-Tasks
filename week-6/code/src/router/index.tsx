import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Login from "@pages/Login";
import PageLayout from "@pages/PageLayout";
import SignIn from "@pages/SignIn";
import User from "@pages/Users/User";
import UsersLayout from "@pages/Users/UsersLayout";
import Users from "@pages/Users/partials/UserListTable";

import useLogin from "@hooks/useLogin";
import ErrorPage from "@pages/Error";
import CreateUser from "@pages/CreateUser";

const router = (isLogin: boolean) => {
  return createBrowserRouter([
    {
      path: "/",
      element: isLogin ? <PageLayout /> : <Navigate to="/login" replace />,
      caseSensitive: true,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Navigate to="/users" replace />,
        },
        {
          path: "users",
          Component: UsersLayout,
          caseSensitive: true,
          children: [
            {
              index: true,
              element: <Users />,
              errorElement: <ErrorPage />,
            },
            {
              path: ":userId",
              element: <User />,
              caseSensitive: true,
              errorElement: <ErrorPage />,
            },
          ],
        },
        {
          path: "create",
          element: <CreateUser />,
          caseSensitive: true,
          errorElement: <ErrorPage />,
        },
        {
          path: "*",
          element: <ErrorPage />,
          caseSensitive: true,
        },
      ],
    },
    {
      path: "login",
      element: !isLogin ? <Login /> : <Navigate to="/" replace />,
      errorElement: <ErrorPage />,
      caseSensitive: true,
    },
    {
      path: "sign-in",
      element: isLogin ? <Navigate to="/" replace /> : <SignIn />,
      errorElement: <ErrorPage />,
      caseSensitive: true,
    },
  ]);
};

function Router() {
  const isLogin = useLogin();

  return <RouterProvider router={router(isLogin)} />;
}

export default Router;
