import Link from 'next/link';

function HeaderAuthButtons() {
  return (
    <div className='flex items-center gap-2'>
      <Link
        href='/sign-up'
        className='text-sm hover:text-indigo-300 transition-all'
      >
        회원가입
      </Link>
      <Link
        href='/log-in'
        className='text-sm hover:text-indigo-300 transition-all'
      >
        로그인
      </Link>
    </div>
  );
}

export default HeaderAuthButtons;
