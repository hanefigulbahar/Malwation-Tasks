import { gql } from "@apollo/client";
import Button from "@components/ui/Button";
import { IGetUserListItem } from "@utils/api/user/types";

export const GET_USERS_LIST_BY_SEARCH = gql`
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

interface IUserListTableItemProps {
  user: IGetUserListItem;
  userDetailHandler: (id: string) => void;
  deleteHandler: (e: any, id: any) => void;
  searchQuery: string | null;
}
const UserListTableItem = ({
  user,
  userDetailHandler,
  deleteHandler,
}: IUserListTableItemProps) => {
  return (
    <div
      onClick={() => userDetailHandler(user.id)}
      key={user.id}
      className="grid grid-cols-3 items-center border-b bg-white last:rounded-b-md hover:bg-primary/5"
    >
      <div className="px-6 py-4">{user.name}</div>
      <div className="px-6 py-4">
        {user.active === true ? (
          <div className="flex items-center">
            <div className="mr-2 h-2.5 w-2.5 rounded-full bg-success"></div>
            Online
          </div>
        ) : (
          <div className="flex items-center">
            <div className="mr-2 h-2.5 w-2.5 rounded-full bg-warning"></div>
            Offline
          </div>
        )}
      </div>
      <div className="px-8 py-4">
        <Button
          color="warning"
          size="medium"
          variant="textOnly"
          icon="eyeOn"
          onClick={(e) => deleteHandler(e, user.id)}
        />
      </div>
    </div>
  );
};

export default UserListTableItem;
