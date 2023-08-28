import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ApolloError, useQuery } from "@apollo/client";
import { Toaster, toast } from "react-hot-toast";

import { GET_USERS_LIST } from "@libs/graphql/querys";
import { IGetUserList, IGetUserListItem } from "@utils/user/types";

import Loading from "@components/Loading";
import ModalContainer from "@components/ModalContainer";
import UsersListFilter from "../UserFilterList";
import UserListTableItem from "./UserListTableItem";
import { useAppSelector } from "@libs/redux/hooks";
import ErrorPage from "@pages/Error";

const Users = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(search);
  const searchQuery = queryParams.get("name");

  const loginUserPermissions = useAppSelector(
    (state) => state.user.permissions
  );

  const [modalStatu, setModalStatu] = useState<boolean>(false);
  const [deleteUserID, setDeleteUserID] = useState<string | null>(null);

  const { loading, previousData, data, error } = useQuery<IGetUserList>(
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

  if (error) return <ErrorPage status={404} />;
  if (!previousData && loading) return <Loading />;

  const userDetailHandler = (id: string) => {
    if (loginUserPermissions?.includes("Update")) {
      navigate(`${id}`);
    } else {
      toast.error("You do not have user update permission!");
    }
  };

  const deleteModalHandler = (e: any, id: string) => {
    e.stopPropagation();
    if (loginUserPermissions?.includes("Delete")) {
      setDeleteUserID(id);
      setModalStatu(true);
    } else {
      toast.error("You do not have user delete permission!");
    }
  };

  return (
    <div className="flex flex-col items-center sm:rounded-lg">
      <Toaster position="top-right" />
      <div className="flex w-full flex-col gap-3 overflow-x-auto p-10">
        {modalStatu && (
          <ModalContainer
            userID={deleteUserID}
            setModalStatu={setModalStatu}
            message="Are you sure you want to delete?"
          />
        )}
        <div className="sticky left-0 mt-1">
          <UsersListFilter
            loading={loading}
            defaultValues={{
              name: "",
            }}
          />
        </div>
        <div className="min-w-[800px] text-left text-sm text-gray-500">
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
            <div className="h-full">
              {data?.getUsersList.users?.length === 0 && (
                <div className="grid h-96 grid-cols-1 grid-rows-1 place-items-center bg-gray-100 text-center">
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
                    deleteHandler={(e) => {
                      deleteModalHandler(e, user.id);
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
