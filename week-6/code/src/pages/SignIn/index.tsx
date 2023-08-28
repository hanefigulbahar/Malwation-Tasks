import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ILoginInput, LoginForm } from "@utils/auth/types";
import { useMutation } from "@apollo/client";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { CREATE_USER } from "@libs/graphql/querys";
import { ICreateUser } from "@utils/user/types";
import Link from "@components/ui/Link";

function SignIn() {
  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInput>({
    resolver: zodResolver(LoginForm),
  });

  const [createUser, { loading }] = useMutation<ICreateUser>(CREATE_USER, {
    onCompleted: ({ createUser }) => {
      if (createUser.__typename === "Message") {
        navigate("/login");
      } else {
        toast.error(createUser?.errorMessage);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit: SubmitHandler<ILoginInput> = async (value) => {
    await createUser({
      variables: {
        input: {
          name: value.name,
          password: value.password,
        },
      },
    });
  };

  return (
    <div className="grid min-h-screen grid-cols-3 place-content-center overflow-y-auto px-10 max-lg:grid-cols-1">
      <Toaster position="top-right" />
      <div className="col-start-2 max-lg:col-start-1">
        <div className="space-y-6 rounded-lg px-6 py-14 shadow-lg">
          <div className="text-center text-2xl">Register</div>
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
              disabled={loading}
              isLoading={loading}
              color="primary"
              size="medium"
            >
              Sign in
            </Button>
          </form>
          <div className="grid grid-cols-1 place-items-center gap-3">
            <div>or</div>
            <div className="w-max">
              <Link
                disabled={loading}
                url="/login"
                size="small"
                color="primary"
                variant="secondary"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
