import React, { useState } from "react";
import { UserContext } from "./UserContextInstance.ts";

type UserData = {
  fullname: string;
  email: string;
  password: string;
  rememberMe: boolean;
};

type UserContextType = {
  user: UserData | null;
  setUser: (user: UserData) => void;
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserContextType["user"]>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
