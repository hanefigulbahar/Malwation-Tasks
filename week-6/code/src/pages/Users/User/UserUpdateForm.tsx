import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";

import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import {
  IGetOneUser,
  IUpdateUserInput,
  IUpdateUserListInput,
  UpdateUserListForm,
  permissionsArray,
} from "@utils/user/types";
import { GET_ONE_USER, UPDATE_USER } from "@libs/graphql/querys";
import { useAppDispatch, useAppSelector } from "@libs/redux/hooks";
import { userUpdate } from "@libs/redux/reducers/user";

interface IUserUpdateFormProps {
  user?: IGetOneUser;
}

const UserUpdateForm = ({ user }: IUserUpdateFormProps) => {
  const dispatch = useAppDispatch();
  const loginUserID = useAppSelector((state) => state.user.id);
  const { userId } = useParams();
  const [isChecked, setIsChecked] = useState<boolean>(
    user ? user.getOneUser.active : false
  );
  const [passwordShown, setPasswordShown] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IUpdateUserListInput>({
    resolver: zodResolver(UpdateUserListForm),
  });

  const [updateUser, { loading }] = useMutation(UPDATE_USER, {
    onCompleted: (data) => {
      if (data.updateUser.__typename === "Message") {
        toast.success(data.updateUser.message);
        const value = getValues();

        if (userId === loginUserID) {
          dispatch(
            userUpdate({
              name: value.name,
              permissions: value.permissions,
            })
          );
        }
      } else {
        toast.error(data.updateUser.errorMessage);
      }
    },
  });

  const onSubmit: SubmitHandler<IUpdateUserListInput> = async (
    data: IUpdateUserInput
  ) => {
    await updateUser({
      variables: {
        input: {
          id: userId,
          user: {
            ...data,
          },
        },
      },
      refetchQueries: [
        {
          query: GET_ONE_USER,
          variables: {
            input: {
              id: userId,
            },
          },
        },
      ],
    });
  };

  return (
    <form
      className="grid w-full grid-cols-2 grid-rows-3 items-center gap-10 p-10 max-lg:grid-cols-1 max-lg:space-y-2 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          disabled={loading}
          errorMessage={errors.name?.message}
          defaultValue={user?.getOneUser.name}
          autoComplete="off"
          id="Name"
          size="medium"
          color="primary"
          type="text"
          {...register("name")}
        />
      </div>
      <div>
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
      </div>

      <div className="flex items-center justify-center gap-2 ">
        <label className="flex w-max cursor-pointer select-none items-center gap-3">
          <div className="relative">
            <input
              disabled={loading}
              {...register("active")}
              type="checkbox"
              checked={isChecked}
              onChange={() => {
                setIsChecked((state) => !state);
              }}
              className="sr-only"
            />
            <div
              className={`box block h-8 w-14 rounded-full ${
                isChecked && !loading ? "bg-success " : "bg-gray-300"
              }`}
            ></div>
            <div
              className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                isChecked ? "translate-x-full" : ""
              }`}
            ></div>
          </div>
        </label>
        <p>Active User</p>
      </div>
      <div className="">
        <ul className="grid grid-cols-2 grid-rows-2 place-items-center rounded-lg  border-gray-200 bg-white text-sm text-gray-900">
          {permissionsArray.map((permission, index) => (
            <li key={index} className="w-full">
              <div className="flex items-center justify-center pl-3">
                <input
                  disabled={loading}
                  {...register("permissions")}
                  type="checkbox"
                  value={permission}
                  defaultChecked={
                    user?.getOneUser.permissions.includes(permission)
                      ? true
                      : false
                  }
                  className="h-6 w-6 rounded border-primary bg-gray-100 accent-primaryActive  "
                />
                <label className="ml-2 w-full py-3 text-sm font-medium text-gray-900">
                  {permission}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Button
        disabled={loading}
        isLoading={loading}
        type="submit"
        size="medium"
        color="primary"
      >
        Submit
      </Button>
    </form>
  );
};

export default UserUpdateForm;
