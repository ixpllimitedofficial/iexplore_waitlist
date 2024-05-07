import { Path, UseFormRegister } from "react-hook-form";

export interface IFormInput {
  email: string;
  password: string;
}

export type InputType = {
    type?: string;
    placeholder?: string;
    label?: string
    inputClass?: string;
    className?: string;
    name?: string;
    labelClassName?: string;
    registerName: Path<IFormInput>;
    register: UseFormRegister<IFormInput>;
    isInputRequired?: any;
    errors?: any;
    errorMessage?: string
}