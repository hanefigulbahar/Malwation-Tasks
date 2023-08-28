import { IGetUserListItem } from "@utils/user/types";

import Button from "@components/ui/Button";

interface IUserListTableItemProps {
  user: IGetUserListItem;
  searchQuery: string | null;
  userDetailHandler: (id: string) => void;
  deleteHandler: (e: any, id: string) => void;
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
      className=" grid grid-cols-3 items-center border-b bg-white last:rounded-b-md hover:bg-primary/5   "
    >
      <div className="px-6 py-4">{user.name}</div>
      <div className="px-6 py-4">
        {user.active === true ? (
          <div className="flex items-center">
            <div className="mr-2 h-2.5 w-2.5 rounded-full bg-success"></div>
            Active
          </div>
        ) : (
          <div className="flex items-center">
            <div className="mr-2 h-2.5 w-2.5 rounded-full bg-warning"></div>
            Pasive
          </div>
        )}
      </div>
      <div className="px-8 py-4">
        <Button
          color="warning"
          size="medium"
          variant="textOnly"
          icon="trash"
          onClick={(e) => deleteHandler(e, user.id)}
        />
      </div>
    </div>
  );
};

export default UserListTableItem;
