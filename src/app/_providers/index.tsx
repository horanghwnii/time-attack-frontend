import { AuthProvider } from '@/contexts/auth.context';
import { ReduxProvider } from '@/redux/store';
import ReactQueryProvider from './ReactQueryProvider';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <ReactQueryProvider>
        <AuthProvider>{children}</AuthProvider>
      </ReactQueryProvider>
    </ReduxProvider>
  );
}

export default Providers;
