import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import Routes from './routes'
import queryClient from '@src/service/queryClient';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>
    
  );
}

export default App;
