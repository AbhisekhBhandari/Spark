import dayjs from "dayjs";
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

// export const detailsFillSchema = z.object({
//   username: z
//     .string()
//     .max(10, "Username should not be longer than 10 characters."),
//     dateOfBirth: z.custom((value:any)=>{
//       if(dayjs(value).isValid()){
//         return value
//       }else{
//         throw new Error('Invalid Date format')
//       }
//     })
// });
export const detailsFillSchema = z.object({
  username: z.string().max(10, "Username should not be longer than 10 characters.").min(3,"Username should atleast be 3 characters long"),
  dateOfBirth: z
    .date()
    .refine((date) => {
      // Check if the date is valid
      return dayjs(date).isValid();
    }, "Invalid date format or date value")
    .refine((date) => {
      // Check if the user is at least 18 years old
      return dayjs().diff(date, "year") >= 18;
    }, "You must be at least 18 years old to continue"),
});


export type DetailsFillSchemaType = z.infer<typeof detailsFillSchema>;
