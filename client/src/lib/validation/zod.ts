import { z } from "zod";
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(10, "Passwords should be atleast 10 characters long."),
});
export type LoginSchemaType = z.infer<typeof LoginSchema>;

export const signupSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(10, "Passwords should be atleast 10 characters long."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });

export type SignupSchemaType = z.infer<typeof signupSchema>;
