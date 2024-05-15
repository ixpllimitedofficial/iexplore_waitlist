import { Path, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export interface IFormInput {
  email: string;
  password: string;
}

export type InputType = {
  value?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  inputClass?: string;
  className?: string;
  name?: string;
  labelClassName?: string;
  registerName?: Path<IFormInput>;
  register?: UseFormRegister<IFormInput>;
  isInputRequired?: any;
  errors?: any;
  errorMessage?: string;
};

export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});
