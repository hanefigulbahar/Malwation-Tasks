import { useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { CREATE_USER } from "@libs/graphql/querys";

import { ILoginInput, LoginForm } from "@utils/auth/types";
import { ICreateUser } from "@utils/user/types";

import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import { useState } from "react";

const CreateUser = () => {
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
        toast.success(createUser.message);
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
    <div className="mx-auto w-full p-10">
      <Toaster position="top-right" />
      <form
        className="grid grid-cols-5  items-center gap-10 p-10 max-lg:grid-cols-1 max-lg:space-y-2 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-start-2 col-end-5 grid grid-rows-3 gap-5 max-lg:col-start-1">
          <Input
            disabled={loading}
            errorMessage={errors.name?.message}
            autoComplete="off"
            id="Name"
            size="medium"
            color="primary"
            type="text"
            {...register("name")}
          />

          <Input
            disabled={loading}
            errorMessage={errors.password?.message}
            autoComplete="off"
            id="Password"
            size="medium"
            color="primary"
            type={passwordShown ? "text" : "password"}
            rightIcon={passwordShown ? "eyeOn" : "eyeOff"}
            {...register("password")}
            rightIconOnClick={() => {
              setPasswordShown((state) => !state);
            }}
          />

          <Button
            disabled={loading}
            isLoading={loading}
            type="submit"
            size="medium"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
