import { ZodError, z } from "zod";

export const loginValidationSchema = z.object({
  username_or_email: z
    .string()
    .min(1, { message: "Username must be not be empty." }),
  password: z.string().min(1, {
    message: "Password must be not be empty.",
  }),
});

export const signupValidationSchema = z
  .object({
    first_name: z
      .string()
      .min(2, { message: "First name must be at least 2 chars." }),
    last_name: z
      .string()
      .min(2, { message: "Last name must be at least 2 chars." }),
    email: z.string().email({
      message: "Please put in a valid email.",
    }),
    username: z
      .string()
      .min(4, { message: "Username must be at least 5 chars." }),
    role: z.string(),
    phone: z
      .string()
      .min(11, { message: "Phone Number must be at least 11 chars." }),
    gender: z
      .string({
        required_error: "Please select a gender.",
      })
      .min(1, { message: "Please select a gender" }),
    date_of_birth: z.string().min(1, { message: "Please select a date" }),
    // location: z
    //   .string({
    //     required_error: "Please select a location.",
    //   })
    //   .min(1, { message: "Please select a location" }),
    referral_code: z.string().optional(),
    password: z.string().min(1, {
      message: "Password must be not be empty.",
    }),
    confirm_password: z.string().min(1, {
      message: "Confirm Password must be not be empty.",
    }),
    checkbox: z.boolean().refine((checked) => checked, {
      message: "You must check the checkbox.",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });

export const emailSchema = z.object({
  email: z.string().email({
    message: "Please put in a valid email.",
  }),
});

export const resetPasswordValidationSchema = z
  .object({
    password: z.string().min(1, {
      message: "Password must be not be empty.",
    }),
    confirm_password: z.string().min(1, {
      message: "Confirm Password must be not be empty.",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"], // path of error
  });

export const verifyOTPSchema = z.object({
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export type InputTypes = any;
