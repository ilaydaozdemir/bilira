import { createContext } from "react";

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

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
