"use client";
import React, { createContext, useContext, useState } from "react";

interface IAuthContextProps {
  children: React.ReactNode;
}

interface IAuthContextValue {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  isModalOpened: boolean;
  setModalIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<IAuthContextValue | null>(null);

export const AuthProvider = ({ children }: IAuthContextProps) => {
  const [error, setError] = useState<string>("");
  const [isModalOpened, setModalIsOpened] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{ error, setError, isModalOpened, setModalIsOpened }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
