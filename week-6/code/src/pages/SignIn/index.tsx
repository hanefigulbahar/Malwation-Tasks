import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ILoginInput, LoginForm } from "@utils/api/auth/types";
import { gql, useMutation } from "@apollo/client";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ... on Message {
        message
      }
      ... on Error {
        errorMessage
      }
    }
  }
`;

function SignIn() {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [createUser, { loading }] = useMutation(CREATE_USER);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInput>({
    resolver: zodResolver(LoginForm),
  });

  const onSubmit: SubmitHandler<ILoginInput> = async (value) => {
    try {
      const { data } = await createUser({
        variables: {
          input: {
            name: value.name,
            password: value.password,
          },
        },
      });

      if (!data.createUser.errorMessage) {
        navigate("login");
      } else {
        alert(data.createUser.errorMessage);
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
        <div className=" w-[28rem] space-y-8 rounded-lg px-2 py-10 shadow-lg">
          <div className="text-center text-2xl">Register</div>
          <form
            className="mx-auto grid grid-cols-1 grid-rows-1 px-6 py-14  "
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
                  Register
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
