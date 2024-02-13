'use client';

import API from '@/api/index.api';
import { useAuth } from '@/contexts/auth.context';
import { useMutation } from '@tanstack/react-query';
import { FormEventHandler, useId, useRef } from 'react';
import Modal from '../Modal';

function LogInModal() {
  const id = useId();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: API.auth.logIn,
  });

  const { logIn } = useAuth();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);

  const handleSubmitLogIn: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const emailValue = emailInputRef.current?.value;
    const pwValue = pwInputRef.current?.value;

    if (!emailValue || !pwValue)
      return alert('아이디와 비밀번호를 입력해주세요.');

    const returnValue = await mutateAsync({
      email: emailValue,
      password: pwValue,
    });

    console.log(returnValue);
    logIn();
  };

  return (
    <Modal title='로그인'>
      <form onSubmit={handleSubmitLogIn} className='flex flex-col mx-auto'>
        <label htmlFor={`${id}-email`} className='mt-5 text-sm mb-1'>
          이메일
        </label>
        <input
          ref={emailInputRef}
          type='text'
          id={`${id}-email`}
          className='border outline-none px-5 py-3 box-border w-full rounded focus:border-black transition'
        />
        <label htmlFor={`${id}-password`} className='mt-5 text-sm mb-1'>
          비밀번호
        </label>
        <input
          ref={pwInputRef}
          type='password'
          id={`${id}-password`}
          className='border outline-none px-5 py-3 box-border w-full rounded focus:border-black transition'
        />
        <button
          type='submit'
          className='border font-bold w-full py-4 bg-black text-white mt-14 text-sm'
        >
          로그인하기
        </button>
      </form>
    </Modal>
  );
}

export default LogInModal;
