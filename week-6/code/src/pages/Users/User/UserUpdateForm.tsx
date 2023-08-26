import { gql, useMutation } from "@apollo/client";
import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUpdateUserInput, UpdateUserListForm } from "@utils/user/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      ... on Message {
        message
      }
      ... on Error {
        errorMessage
      }
    }
  }
`;
const UserUpdateForm = (user: any) => {
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER);
  const { userId } = useParams();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateUserInput>({
    resolver: zodResolver(UpdateUserListForm),
  });

  const onSubmit: SubmitHandler<IUpdateUserInput> = async (
    value: IUpdateUserInput
  ) => {
    try {
      const { data } = await updateUser({
        variables: {
          input: {
            id: userId,
            user: {
              name: value.name ? value.name : "",
              password: value.password ? value.password : "",
              active: true,
              permissions: [],
            },
          },
        },
      });
      if (data) {
        console.log("başarılı");
      } else {
        alert(data.login.errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log(watch("active"));
  return (
    <div>
      <form className="w-full p-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="group relative z-0 mb-10 w-full ">
          <Input
            defaultValue={user.user.getOneUser.name}
            errorMessage={errors.name?.message}
            id="Name"
            size="medium"
            color="primary"
            type="text"
            {...register("name")}
          />
        </div>
        <div className="grid items-end md:grid-cols-2 md:gap-6">
          <div className="group relative z-0 mb-10 w-full">
            <Input
              errorMessage={errors.password?.message}
              id="Password"
              size="medium"
              color="primary"
              type="text"
              {...register("password")}
            />
          </div>
          <div className="group relative z-0 mb-10 w-full ">
            <select {...register("active")}>
              <option value="true">active</option>
              <option value="false">pasive</option>
            </select>
            {/* <Select
              data={["active", "pasive"]}
              errorMessage={errors.active?.message}
              id="Active"
              size="medium"
              color="primary"
            /> */}
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <Button type="submit" size="medium" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserUpdateForm;
