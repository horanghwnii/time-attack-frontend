import Link from 'next/link';
import HeaderAuthButtons from './components/HeaderAuthButtons';

function Header() {
  return (
    <header className='flex justify-between items-center px-8 py-4 border-b'>
      <div className='flex items-center gap-20'>
        <Link href='/' className='text-2xl font-bold '>
          발랑
        </Link>

        <Link href='/brands' className='uppercase text-sm font-medium'>
          Brands
        </Link>
      </div>

      <HeaderAuthButtons />
    </header>
  );
}

export default Header;
