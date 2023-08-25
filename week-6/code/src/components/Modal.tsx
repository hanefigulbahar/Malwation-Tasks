import { gql, useMutation } from "@apollo/client";
import Button from "./ui/Button";
import { useAppDispatch, useAppSelector } from "@libs/redux/hooks";
import { closeModal } from "@libs/redux/reducers/modal";
import { useForm } from "react-hook-form";
import { GET_USERS_LIST } from "@pages/Users/partials/UserListTable";
import { useRef } from "react";

const DELETE = gql`
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      ... on Message {
        message
      }
      ... on Error {
        errorMessage
      }
    }
  }
`;

const Modal = () => {
  const dispatch = useAppDispatch();

  const userID = useAppSelector((state) => state.modal.id);
  const [deleteUser, { loading }] = useMutation(DELETE, {
    refetchQueries: [GET_USERS_LIST, "getUsersList"],
  });

  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    try {
      const { data } = await deleteUser({
        variables: {
          input: {
            id: userID,
          },
        },
      });

      if (data) {
        dispatch(closeModal());
      } else {
        alert(data.errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeModalHandle = () => {
    dispatch(closeModal());
    console.log("close");
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-gray-500/20">
      <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white p-14">
        <div className="grid grid-rows-2 gap-10">
          <p className="text-xl">Are you sure you want to delete this user?</p>
          <div className="flex w-full justify-between ">
            <div>
              <Button
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
                color="warning"
              >
                Delete
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
