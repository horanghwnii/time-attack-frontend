'use client';

import { createContext, useContext, useState } from 'react';

type AuthContextValue = {
  isLoggedIn: boolean;
};

const initialValue: AuthContextValue = {
  isLoggedIn: false,
};

const AuthContext = createContext(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = {
    isLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
