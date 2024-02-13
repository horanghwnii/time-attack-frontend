'use client';

import { setModal } from '@/redux/slices/modal.slice';
import { useAppDispatch } from '@/redux/store';
import { PropsWithChildren } from 'react';

interface ModalProps {
  title: string;
}

function Modal({ title, children }: PropsWithChildren<ModalProps>) {
  const dispatch = useAppDispatch();

  const handleClickBackDrop = () => {
    const action = setModal(null);
    dispatch(action);
  };

  return (
    <div
      onClick={handleClickBackDrop}
      className='fixed top-0 left-0 bg-black/50 w-screen h-screen z-30'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='bg-white w-full max-w-[400px] mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-12 shadow rounded'
      >
        <h2 className='text-center text-3xl font-bold py-5'>{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;
