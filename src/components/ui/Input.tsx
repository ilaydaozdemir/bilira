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
  register?: UseFormRegister<T>; // Uncontrolled kullanım için
  validation?: RegisterOptions<T, Path<T>>;

  // Controlled kullanım için
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  className?: string;
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
  value,
  onChange,
  className = "",
}: InputProps<T>) {
  const inputProps = {
    id: String(name),
    name,
    type,
    placeholder,
    className: `w-full px-4 py-2 border rounded-md outline-none transition ${
      error ? "border-red-500" : "border-gray-300 focus:border-blue-500"
    } ${className}`,
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={String(name)}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {register ? (
        <input {...register(name, validation)} {...inputProps} />
      ) : (
        <input value={value} onChange={onChange} {...inputProps} />
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}

export default Input;
