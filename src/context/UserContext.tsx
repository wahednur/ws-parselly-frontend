/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/context/UserContext.tsx
/** @refresh skip */
import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

// Define the type for the user object
export interface User {
  id: string;
  name: string;
  email: string;
  // ...other user properties
}

// Define the type for the context value
export interface UserContextType {
  user: User | null;
  isLoading: boolean;
  error: any;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, error } = useGetMeQuery(undefined);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (data?.data) {
      setUser(data.data);
    }
  }, [data]);

  const value = { user, isLoading, error };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
