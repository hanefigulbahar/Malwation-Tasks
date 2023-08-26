import { ApolloError, useQuery } from "@apollo/client";
import UsersListFilter from "../UserFilterList";
import UserListTableItem from "./UserListTableItem";
import { IGetUserList, IGetUserListItem } from "@utils/user/types";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "@components/Loading";
import { useAppDispatch, useAppSelector } from "@libs/redux/hooks";
import { openModal } from "@libs/redux/reducers/modal";
import Modal from "@components/Modal";
import { createPortal } from "react-dom";
import { GET_USERS_LIST } from "@libs/graphql/querys";
import { Toaster, toast } from "react-hot-toast";

const Users = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const queryParams = new URLSearchParams(search);
  const searchQuery = queryParams.get("name");

  const modal = useAppSelector((state) => state.modal.isOpen);

  const { loading, previousData, data } = useQuery<IGetUserList>(
    GET_USERS_LIST,
    {
      variables: {
        input: {
          name: searchQuery ? searchQuery : "",
        },
      },

      onError: (error: ApolloError) => {
        toast.error(error.message);
      },
    }
  );

  if (!previousData && loading) return <Loading />;

  const userDetailHandler = (id: string) => {
    navigate(`${id}`);
  };

  const deleteHandler = (e: any, id: string) => {
    e.stopPropagation();
    dispatch(
      openModal({
        id,
      })
    );
  };

  return (
    <div className="flex flex-col items-center sm:rounded-lg">
      <Toaster position="top-right" />
      {modal && createPortal(<Modal />, document.body)}
      <div className="flex w-full flex-col  gap-3 overflow-x-auto p-10">
        <div className="sticky left-0 mt-1">
          <UsersListFilter
            loading={loading}
            defaultValues={{
              name: "",
            }}
          />
        </div>
        <div className=" min-w-[800px] text-left text-sm text-gray-500">
          <div className="sticky top-0 rounded-t-md bg-primary/30 text-xs uppercase text-gray-800">
            <div className="grid grid-cols-3">
              <p className="px-6 py-3">Name</p>
              <p className="px-6 py-3">Active</p>
              <p className="px-6 py-3">Delete</p>
            </div>
          </div>
          {loading ? (
            <Loading />
          ) : (
            <>
              {data?.getUsersList.users?.length === 0 && (
                <div className="grid h-96 place-items-center  bg-gray-100 text-center">
                  <div className="text-gray-500">
                    No results found matching your search
                  </div>
                </div>
              )}
              <div>
                {data?.getUsersList.users.map((user: IGetUserListItem) => (
                  <UserListTableItem
                    key={user.id}
                    user={user}
                    userDetailHandler={userDetailHandler}
                    searchQuery={searchQuery}
                    deleteHandler={deleteHandler}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
