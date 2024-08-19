import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import Routes from './routes'
import queryClient from '@src/service/queryClient';
import { AuthProvider } from './contexts/AuthContext';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </QueryClientProvider>
      </AuthProvider>
    </UserProvider>
    
  );
}

export default App;
