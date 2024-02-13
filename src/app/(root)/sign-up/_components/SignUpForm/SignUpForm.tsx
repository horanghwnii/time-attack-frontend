'use client';

import API from '@/api/index.api';
import { useAuth } from '@/contexts/auth.context';
import { useMutation } from '@tanstack/react-query';
import { FormEventHandler, useRef } from 'react';

function SignUpForm() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: API.auth.signUp,
  });

  const { logIn } = useAuth();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);
  const pw2InputRef = useRef<HTMLInputElement>(null);

  const handleSubmitSignUp: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const emailValue = emailInputRef.current?.value;
    const pwValue = pwInputRef.current?.value;
    const pw2Value = pw2InputRef.current?.value;

    if (!emailValue || !pwValue || !pw2Value) {
      return alert('모든 값을 입력해주세요');
    }

    if (pwValue !== pw2Value) {
      return alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    }

    const returnValue = await mutateAsync({
      email: emailValue,
      password: pwValue,
    });

    logIn();
  };

  return (
    <form
      onSubmit={handleSubmitSignUp}
      className='flex w-[400px] flex-col mx-auto'
    >
      <label htmlFor='email' className='mt-5 text-sm mb-1'>
        이메일
      </label>
      <input
        ref={emailInputRef}
        type='email'
        id='email'
        className='border outline-none px-5 py-3 box-border w-full rounded focus:border-black transition'
      />
      <label htmlFor='password' className='mt-5 text-sm mb-1'>
        비밀번호
      </label>
      <input
        ref={pwInputRef}
        type='password'
        id='password'
        className='border outline-none px-5 py-3 box-border w-full rounded focus:border-black transition'
      />
      <label htmlFor='password2' className='mt-5 text-sm mb-1'>
        비밀번호 확인
      </label>
      <input
        ref={pw2InputRef}
        type='password'
        id='password2'
        className='border outline-none px-5 py-3 box-border w-full rounded focus:border-black transition'
      />
      <button
        type='submit'
        className='border font-bold w-full py-4 bg-black text-white mt-14 text-sm'
      >
        회원가입하기
      </button>
    </form>
  );
}

export default SignUpForm;
