import { z } from "zod";
export const permissionsArray = ["Read", "Create", "Delete", "Update"] as const;

export interface IGetUserListItem {
  id: string;
  name: string;
  active: boolean;
  createAt: number;
}

export interface IGetOneUser {
  getOneUser: {
    active: true;
    name: string;
    permissions: string[];
    __typename: string;
  };
}

export interface IGetUser {
  id: string;
  name: string;
  active: boolean;
  permissions: string[];
}

export interface IGetUserList {
  getUsersList: {
    __typename: string;
    users: IGetUserListItem[];
  };
}

export const GetUserListForm = z.object({
  name: z.union([
    z.string().max(0, { message: "name is not valid." }),
    z.string(),
  ]),
});
export const UpdateUserListForm = z.object({
  name: z
    .string()
    .min(2)
    .max(15)
    .regex(new RegExp("^[a-zA-Z0-9çğıöşüÇĞİÖŞÜ]*$", "gi"), "Invalid Character"),
  password: z
    .string()
    .regex(new RegExp("^[a-zA-Z0-9çğıöşüÇĞİÖŞÜ]*$", "gi"), "Invalid Character")
    .refine(
      (value) => value.length === 0 || (value.length > 2 && value.length < 15),
      "Password must be maximum 15 and minimum 2 characters"
    ),
  active: z.boolean(),
  permissions: z.array(z.enum(permissionsArray)),
});

export interface IUpdateUserInput {
  name: string;
  active: boolean;
  permissions: string[];
  password: string;
}

export interface ICreateUser {
  createUser: {
    __typename: string;
    message: string;
    errorMessage: string;
  };
}

export interface IDeleteUser {
  deleteUser: {
    __typename: string;
    message: string;
    errorMessage: string;
  };
}

export type IGetUserListInput = z.infer<typeof GetUserListForm>;

export type IUpdateUserListInput = z.infer<typeof UpdateUserListForm>;
