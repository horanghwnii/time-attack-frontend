'use client';

import { useAppSelector } from '@/redux/store';
import Header from './_components/Header';

function RootLayout({ children }: { children: React.ReactNode }) {
  const modal = useAppSelector((state) => state.modal.modal);

  return (
    <div>
      <Header />
      {children}
      {modal}
    </div>
  );
}

export default RootLayout;
