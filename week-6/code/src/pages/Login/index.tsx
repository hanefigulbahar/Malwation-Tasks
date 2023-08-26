import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@libs/redux/hooks";
import { ILoginInput, LoginForm } from "@utils/auth/types";
import { gql, useMutation } from "@apollo/client";
import { userLogin } from "@libs/redux/reducers/user";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";
import { useState } from "react";
import Link from "@components/ui/Link";
import { GET_USERS_LIST } from "@libs/graphql/querys";

const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ... on LoginData {
        id
        name
        permissions
      }
      ... on Error {
        errorMessage
      }
    }
  }
`;

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [login, { loading }] = useMutation(LOGIN, {
    refetchQueries: [GET_USERS_LIST, "getUsersList"],
  });
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInput>({
    resolver: zodResolver(LoginForm),
  });

  const onSubmit: SubmitHandler<ILoginInput> = async (value) => {
    try {
      const { data } = await login({
        variables: {
          input: {
            name: value.name,
            password: value.password,
          },
        },
      });

      if (data.login.id) {
        dispatch(userLogin(data.login));
      } else {
        alert(data.login.errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onInvalid: SubmitErrorHandler<ILoginInput> = (data) => {
    console.log(data, "error");
  };

  const passwordShownHandler = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className=" grid h-screen min-h-max w-screen grid-cols-1 place-content-center overflow-y-auto">
      <div className="flex items-center justify-center xl:col-span-2">
        <div className=" w-[28rem] space-y-8 rounded-lg px-6 py-14 shadow-lg">
          <div className="text-center text-2xl">Login</div>
          <form
            className="mx-auto grid grid-cols-1 grid-rows-1 "
            onSubmit={handleSubmit(onSubmit, onInvalid)}
          >
            <div className="space-y-4">
              <div className="w-full">
                <Input
                  id="Name"
                  color="primary"
                  size="medium"
                  type="text"
                  autoComplete="off"
                  {...register("name")}
                  errorMessage={errors.name?.message}
                />
              </div>
              <div className="w-full">
                <Input
                  id="Password"
                  color="primary"
                  size="medium"
                  type={passwordShown ? "text" : "password"}
                  autoComplete="off"
                  {...register("password")}
                  errorMessage={errors.password?.message}
                  rightIcon={passwordShown ? "eyeOn" : "eyeOff"}
                  rightIconOnClick={passwordShownHandler}
                />
              </div>
              <div className="w-full">
                <Button isLoading={loading} color="primary" size="medium">
                  Login
                </Button>
              </div>
            </div>
          </form>
          <Link url="/register" size="small" color="primary">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
