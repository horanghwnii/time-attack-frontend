'use client';

import { createSlice } from '@reduxjs/toolkit';

type modalStore = {
  modal: React.ReactElement | null;
};

const initialState: modalStore = {
  modal: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (
      state,
      action: { type: string; payload: modalStore['modal'] }
    ) => {
      state.modal = action.payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { setModal } = modalSlice.actions;
