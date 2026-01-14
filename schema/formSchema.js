import * as z from "zod";

export const formSchema = z.object({
  username: z
    .string()
    .min(3, "username at least 3 character")
    .max(10, "username not more than 10 character"),
  email: z.string().email(),
  password: z
    .string()
    .min(6, "password at least 6 character")
    .max(20, "password not more than 20 character"),
});

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, "password at least 6 character")
    .max(20, "password not more than 20 character"),
});
