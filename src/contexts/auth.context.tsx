'use client';

import API from '@/api/index.api';
import { setModal } from '@/redux/slices/modal.slice';
import { useAppDispatch } from '@/redux/store';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

type AuthContextValue = {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
};

const initialValue: AuthContextValue = {
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
};

const AuthContext = createContext(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    API.auth.refreshToken();
  }, []);

  const logIn = () => {
    setIsLoggedIn(true);

    router.replace('/');
    const action = setModal(null);
    dispatch(action);
  };

  const logOut = () => {
    API.auth.logOut;
    setIsLoggedIn(false);
    router.replace('/');
  };

  const value = {
    isLoggedIn,
    logIn,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
