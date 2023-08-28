import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GET_ONE_USER } from "@libs/graphql/querys";
import Loading from "@components/Loading";
import UserUpdateForm from "./UserUpdateForm";
import { IGetOneUser } from "@utils/user/types";
import { Toaster, toast } from "react-hot-toast";

const User = () => {
  const { userId } = useParams();

  const { error, loading, data } = useQuery<IGetOneUser>(GET_ONE_USER, {
    variables: {
      input: {
        id: userId,
      },
    },
    onCompleted: ({ getOneUser }) => {
      if (getOneUser.__typename === "GetOneUser") {
      }
    },
    onError: (error) => {
      toast.error(error.message.toLocaleUpperCase());
    },
  });

  if (error)
    return (
      <>
        <Toaster position="top-right" />
        <div className="flex h-full items-center justify-center  rounded  bg-gray-100 text-center">
          <div className="uppercase text-gray-500">{error.message}</div>
        </div>
      </>
    );

  if (loading) return <Loading />;

  return (
    <div>
      <Toaster position="top-right" />
      <UserUpdateForm user={data} />
    </div>
  );
};

export default User;
