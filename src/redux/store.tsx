'use client';

import { configureStore } from '@reduxjs/toolkit';
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import { modalReducer } from './slices/modal.slice';

export const store = configureStore({
  reducer: { modal: modalReducer },
});

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

// NextJS 환경에서의 Redux 세팅
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
