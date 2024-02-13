import { PropsWithChildren } from 'react';

interface PageProps {
  title?: string;
}

function Page({ children, title }: PropsWithChildren<PageProps>) {
  return (
    <main className='max-w-full flex flex-col px-5 py-24'>
      {title && (
        <h1 className='text-center text-3xl font-bold mb-8'>{title}</h1>
      )}
      {children}
    </main>
  );
}

export default Page;
