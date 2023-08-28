import { z } from "zod";

export const LoginForm = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be minimum 2 characters " })
    .trim(),
  password: z
    .string()
    .min(6, { message: "Password must be a minimum of 6 characters" })
    .max(16, { message: "Password must be a maximum of 16 characters" })
    .trim(),
});
export type ILoginInput = z.infer<typeof LoginForm>;

export interface ILogin {
  login: {
    __typename: string;
    errorMessage: string;
    id: string;
    name: string;
    permissions: string[];
  };
}

export interface ILoginData {
  isLoggin: boolean;
  id?: string;
  name?: string;
  permissions?: string[];
}
