import React from "react";
import { useUser } from "../context/useUser";

const UserCard = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <p className="text-center mt-10 text-gray-600">
        Kullanıcı verisi bulunamadı.
      </p>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">User Info</h2>
        <div className="space-y-2">
          <p>
            <strong>Full Name:</strong> {user.fullname}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Password:</strong> {user.password}
          </p>
          <p>
            <strong>Remember Me:</strong> {user.rememberMe ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
