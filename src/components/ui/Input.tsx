import React from "react";
import type {
  UseFormRegister,
  FieldValues,
  FieldError,
  Path,
  RegisterOptions,
} from "react-hook-form";

type InputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  error?: FieldError;
  required?: boolean;
  register: UseFormRegister<T>;
  validation?: RegisterOptions<T, Path<T>>;
};

function Input<T extends FieldValues>({
  label,
  name,
  type = "text",
  placeholder = "",
  error,
  required,
  register,
  validation,
}: InputProps<T>) {
  return (
    <div className="mb-4">
      <label
        htmlFor={String(name)}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={String(name)}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
        className={`w-full px-4 py-2 border rounded-md outline-none transition ${
          error ? "border-red-500" : "border-gray-300 focus:border-blue-500"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}

export default Input;
