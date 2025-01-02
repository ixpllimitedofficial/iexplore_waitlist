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
    business_name: z.string().min(1, {
      message: "Business name must not be empty.",
    }),
    business_address: z.string().min(1, {
      message: "Business address must not be empty.",
    }),
    business_email_address: z.string().min(1, {
      message: "Business email is required",
    }),
    business_phone_number: z.string().min(11, { message: "Phone Number must be at least 11 chars." }),
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
export const business_email_addressSchema = z.object({
  business_email_address: z.string().email({
    message: "Please put in a valid email."
  }),
})

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

export const setupBusinessValidationSchema = z
.object({
  profile_picture: z
  .string()
  .min(2, { message: "Add a profile picture" }),
  business_name: z
    .string()
    .min(2, { message: "business name must be at least 2 chars." }),
  email: z.string().email({
    message: "Please put in a valid email.",
  }),
  phone_number: z.string().min(11, { message: "Phone Number must be at least 11 chars." }),
  business_address: z.string().min(1, {
    message: "Business address must not be empty.",
  }),
  opening_hour: z.string().min(1, {
    message: "Field must not be empty.",
  }),
  closing_hour: z.string().min(1, {
    message: "Field must not be empty.",
  }),
  category: z.string().min(1, {
    message: "Please select a category.",
  }),
  photo_of_business: z.string().min(1, {
    message: "Please upload a business picture.",
  }),
  utility_of_business: z.string().min(1, {
    message: "Please upload your utility bill.",
  }),
  cac_of_business: z.string().min(1, {
    message: "Please upload your CAC.",
  }),
  cac_number_of_business: z.string().min(1, {
    message: "This field is required",
  }),

});
export const addDrinksValidationSchema = z
.object({
  profile_picture: z
  .string()
  .min(2, { message: "Add a profile picture" }),
  drinks_name: z
    .string()
    .min(2, { message: "Drinks name must be at least 2 chars." }),
  drinks_price: z.string().min(3, { message: "Drinks must be at least 3 chars." }),
  select_Spot: z.string().min(1, {
    message: "Drinks spot must not be empty.",
  }),
  drinks_description: z.string().min(1, {
    message: "Drinks description must not be empty.",
  }),
  category: z.string().min(1, {
    message: "Please select a category.",
  }),
  drinks_volume: z.string().min(1, {
    message: "Please select volumes.",
  }),
});

export const editProfileSchema = z
  .object({
    full_name: z
      .string()
      .min(2, { message: "First name must be at least 2 chars." }),
    phone: z
      .string()
      .min(11, { message: "Phone Number must be at least 11 chars." }),
    email: z.string().email({
      message: "Please put in a valid email.",
    }),
    date_of_birth: z.string().min(1, { message: "Please select a date" }),
    password: z.string().min(1, {
      message: "Current Password must be not be empty.",
    }),
    confirm_password: z.string().min(1, {
      message: "Confirm current password must be not be empty.",
    }),
    new_password: z.string().min(1, {
      message: "New Password must be not be empty.",
    }),
    confirm_new_password: z.string().min(1, {
      message: "Confirm New Password must be not be empty.",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Current Passwords don't match",
    path: ["confirm_password"],
  })
  .refine((data) => data.new_password === data.confirm_new_password, {
    message: "New Passwords don't match",
    path: ["confirm_new_password"],
  });
  export const feedPostValidationSchema = z.object({
    post_caption: z.string().min(1, {
      message: "Post caption must not be empty.",
    }),
  })
export type InputTypes = any;
