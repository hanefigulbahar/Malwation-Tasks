import { z } from "zod";

export const LoginForm = z.object({
  name: z.string().min(2, {}).trim(),
  password: z.string().min(6).max(10),
});
export type ILoginInput = z.infer<typeof LoginForm>;

export interface ILoginData {
  id: string;
  name: string;
  permissions: string[];
}
