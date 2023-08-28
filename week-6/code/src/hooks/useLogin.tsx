import { useEffect, useState } from "react";

import { useAppSelector } from "@libs/redux/hooks";

const useLogin = () => {
  const login = useAppSelector((state) => state.user.isLogin);

  const [isLogin, setIsLogin] = useState<boolean>(login);

  useEffect(() => {
    if (login) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [login]);

  return isLogin;
};

export default useLogin;
