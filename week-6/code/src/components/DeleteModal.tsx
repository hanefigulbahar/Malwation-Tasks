import { ApolloError, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { DELETE, GET_USERS_LIST } from "@libs/graphql/querys";
import { useAppDispatch, useAppSelector } from "@libs/redux/hooks";
import { userLogout } from "@libs/redux/reducers/user";
import { IDeleteUser } from "@utils/user/types";

import Button from "./ui/Button";
interface IModal {
  message: string;
  setModalStatu: React.Dispatch<React.SetStateAction<boolean>>;
  userID: string | null;
}
const DeleteModal = ({ message, setModalStatu, userID }: IModal) => {
  const dispatch = useAppDispatch();
  const loginUser = useAppSelector((state) => state.user);

  const [deleteUser, { loading }] = useMutation<IDeleteUser>(DELETE, {
    onCompleted: (data) => {
      if (data.deleteUser.__typename === "Message") {
        setModalStatu(false);
        if (userID === loginUser.id) {
          dispatch(userLogout());
        } else {
          toast.success(data.deleteUser.message);
        }
      } else {
        toast.error(data.deleteUser.errorMessage);
      }
    },
    onError: (error: ApolloError) => {
      toast.error(error.message);
    },
    refetchQueries: [GET_USERS_LIST, "getUsersList"],
  });

  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    await deleteUser({
      variables: {
        input: {
          id: userID !== null && userID,
        },
      },
    });
  };

  const closeModalHandle = () => {
    setModalStatu(false);
  };
  return (
    <div className="grid grid-rows-2 gap-10">
      <p className="text-xl">{message}</p>
      <div className="flex w-full justify-between ">
        <div>
          <Button
            disabled={loading}
            variant="secondary"
            size="medium"
            onClick={closeModalHandle}
            color="primary"
          >
            Cancel
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Button
            variant="secondary"
            size="medium"
            isLoading={loading}
            disabled={loading}
            color="warning"
          >
            Delete
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DeleteModal;
