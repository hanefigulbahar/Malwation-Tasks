import { z } from "zod";

export interface IGetUser {
  id: string;
  name: string;
  active: boolean;
  permissions: string[];
}

export interface IGetUserListItem {
  id: string;
  name: string;
  active: boolean;
  createAt: number;
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
  name: z.string().regex(/^(?!.*\s)[\S\s]*\S$/, {
    message: "First name cannot be ignored and no space can be left",
  }),
  password: z
    .string()
    .min(6)
    .max(20)
    .regex(/^(?!.*\s)[\S\s]*\S$/, {
      message: "Password cannot be ignored and no space can be left",
    }),
});

export interface IUpdateUserInput {
  name: string;
  active: boolean;
  permissions: string[];
  password: string;
}

export interface ICreateUserInput {
  name: string;
  password: string;
}

export type IGetUserListInput = z.infer<typeof GetUserListForm>;

export type IUpdateUserListInput = z.infer<typeof UpdateUserListForm>;
