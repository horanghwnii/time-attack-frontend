import LogInModal from '@/components/LogInModal';
import { useAuth } from '@/contexts/auth.context';
import { setModal } from '@/redux/slices/modal.slice';
import { useAppDispatch } from '@/redux/store';
import Link from 'next/link';

function HeaderAuthButtons() {
  const dispatch = useAppDispatch();
  const { isLoggedIn, logOut } = useAuth();

  const onClickLogInButton = () => {
    const action = setModal(<LogInModal />);
    dispatch(action);
  };

  const onClickLogOutButton = () => {
    logOut();
  };

  return (
    <div className='flex items-center gap-2'>
      {isLoggedIn ? (
        <>
          <Link
            href='/cart'
            className='text-sm hover:text-indigo-300 transition-all'
          >
            장바구니
          </Link>
          <button
            onClick={onClickLogOutButton}
            className='text-sm hover:text-indigo-300 transition-all'
          >
            로그아웃
          </button>
        </>
      ) : (
        <>
          <Link
            href='/sign-up'
            className='text-sm hover:text-indigo-300 transition-all'
          >
            회원가입
          </Link>
          <button
            onClick={onClickLogInButton}
            className='text-sm hover:text-indigo-300 transition-all'
          >
            로그인
          </button>
        </>
      )}
    </div>
  );
}

export default HeaderAuthButtons;
