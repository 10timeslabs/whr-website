"use client";
import { createContext, useContext, useEffect } from "react";

interface UserDetails {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  profilePicture: string | null;
}

type authContextType = {
  geoUser: UserDetails | null;
  gtmUser: UserDetails | null;
};

const authContextDefaultValues: authContextType = {
  geoUser: null,
  gtmUser: null,
};

const AccountContext = createContext<authContextType>(authContextDefaultValues);

export const AuthProvider: React.FC<{
  children: React.ReactNode;
  value: authContextType;
}> = ({ children, value = authContextDefaultValues }) => {
  const tempValue: authContextType = {
    gtmUser: {
      id: "",
      firstname: "",
      lastname: "",
      email: "",
      profilePicture: "",
    },
    geoUser: null,
  };

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};

export const useAccounts = () => useContext(AccountContext);
