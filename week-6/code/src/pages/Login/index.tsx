import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { Toaster, toast } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAppDispatch } from "@libs/redux/hooks";
import { userLogin } from "@libs/redux/reducers/user";
import { GET_USERS_LIST, LOGIN } from "@libs/graphql/querys";
import { ILogin, ILoginInput, LoginForm } from "@utils/auth/types";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";
import Link from "@components/ui/Link";

function Login() {
  const dispatch = useAppDispatch();

  const [passwordShown, setPasswordShown] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInput>({
    resolver: zodResolver(LoginForm),
  });

  const [login, { loading }] = useMutation<ILogin>(LOGIN, {
    onCompleted: ({ login }) => {
      if (login.__typename === "LoginData") {
        const { id, name, permissions } = login;
        dispatch(userLogin({ id, name, permissions }));
      } else {
        toast.error(login.errorMessage);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit: SubmitHandler<ILoginInput> = async (value) => {
    await login({
      variables: {
        input: {
          name: value.name,
          password: value.password,
        },
      },
      refetchQueries: [
        { query: GET_USERS_LIST, variables: { input: { name: "" } } },
      ],
    });
  };

  return (
    <div className="grid min-h-screen grid-cols-3 place-content-center overflow-y-auto px-10 max-lg:grid-cols-1">
      <Toaster position="top-right" />
      <div className="col-start-2 max-lg:col-start-1">
        <div className="space-y-6 rounded-lg px-6 py-14 shadow-lg">
          <div className="text-center text-2xl">Login</div>
          <form
            className="mx-auto grid grid-cols-1 items-end gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              id="Name"
              color="primary"
              size="medium"
              type="text"
              autoComplete="off"
              {...register("name")}
              errorMessage={errors.name?.message}
              disabled={loading}
            />
            <Input
              id="Password"
              color="primary"
              size="medium"
              type={passwordShown ? "text" : "password"}
              autoComplete="off"
              {...register("password")}
              errorMessage={errors.password?.message}
              rightIcon={passwordShown ? "eyeOn" : "eyeOff"}
              rightIconOnClick={() => {
                setPasswordShown((state) => !state);
              }}
              disabled={loading}
            />

            <Button
              isLoading={loading}
              disabled={loading}
              color="primary"
              size="medium"
            >
              Login
            </Button>
          </form>
          <div className="grid grid-cols-1 place-items-center gap-3">
            <div>or</div>
            <div className="w-max">
              <Link
                disabled={loading}
                url="/sign-in"
                size="small"
                color="primary"
                variant="secondary"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
