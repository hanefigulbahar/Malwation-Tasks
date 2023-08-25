import { gql, useQuery } from "@apollo/client";
import UsersListFilter from "../UserFilterList";
import UserListTableItem from "./UserListTableItem";
import { IGetUserListItem } from "@utils/api/user/types";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "@components/Loading";
import { useAppDispatch, useAppSelector } from "@libs/redux/hooks";
import { openModal } from "@libs/redux/reducers/modal";
import Modal from "@components/Modal";
import { createPortal } from "react-dom";
import { useEffect } from "react";

export const GET_USERS_LIST = gql`
  query GetUsersList($input: GetUsersListInput!) {
    getUsersList(input: $input) {
      ... on GetUsersList {
        users {
          id
          name
          createdAt
          active
        }
      }
      ... on Error {
        errorMessage
      }
    }
  }
`;

const Users = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modal.isOpen);
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const searchQuery = queryParams.get("name");

  const { error, loading, data } = useQuery(GET_USERS_LIST, {
    variables: {
      input: {
        name: searchQuery ? searchQuery : "",
      },
    },
  });

  if (error) return <p>{error.message}</p>;
  if (loading) return <Loading />;

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
    <div className="relative flex w-full flex-col items-center overflow-x-auto  sm:rounded-lg">
      {modal && createPortal(<Modal />, document.body)}
      <div className="flex w-full flex-col gap-3 p-10">
        <div className="relative mt-1">
          <UsersListFilter
            loading={loading && search ? true : false}
            defaultValues={{
              name: "",
            }}
          />
        </div>
        <div className="w-full text-left text-sm text-gray-500">
          <div className="sticky top-0 rounded-t-md bg-primary/30 text-xs uppercase text-gray-800">
            <div className="grid grid-cols-3">
              <p className="px-6 py-3">Name</p>
              <p className="px-6 py-3">Active</p>
              <p className="px-6 py-3">Delete</p>
            </div>
          </div>
          {data?.getUsersList.users.length === 0 && (
            <div className="grid h-96 place-items-center  bg-gray-100 text-center">
              <div className="text-gray-500">
                No results found matching your search
              </div>
            </div>
          )}
          {loading && <Loading />}
          <div>
            {data.getUsersList.users.map((user: IGetUserListItem) => (
              <UserListTableItem
                key={user.id}
                user={user}
                userDetailHandler={userDetailHandler}
                searchQuery={searchQuery}
                deleteHandler={deleteHandler}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
