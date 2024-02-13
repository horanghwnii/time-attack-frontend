import { AuthProvider } from '@/contexts/auth.context';
import ReactQueryProvider from './ReactQueryProvider';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </ReactQueryProvider>
  );
}

export default Providers;
