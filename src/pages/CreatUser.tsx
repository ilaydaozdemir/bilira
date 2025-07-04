import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useUser } from "../context/useUser";

type FormData = {
  fullname: string;
  email: string;
  password: string;
  rememberMe: boolean;
};

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const { setUser } = useUser();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    setUser(data);
    navigate("/user");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md mx-auto p-4"
    >
      <Input<FormData> label="Full Name" name="fullname" register={register} />

      <Input<FormData>
        label="Email"
        name="email"
        type="email"
        required
        register={register}
        validation={{
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email address",
          },
        }}
        error={errors.email}
      />

      <Input<FormData>
        label="Password"
        name="password"
        type="password"
        required
        register={register}
        validation={{
          required: "Password is required",
          pattern: {
            value: /^[a-zA-Z0-9]{6,}$/,
            message: "Password must be alphanumeric and at least 6 characters",
          },
        }}
        error={errors.password}
      />

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            {...register("rememberMe")}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="ml-2">Remember Me</span>
        </label>
      </div>

      <Button type="submit" disabled={!isValid}>
        Create User
      </Button>
    </form>
  );
};

export default CreateUser;
