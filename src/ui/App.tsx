import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import Routes from './routes'
import queryClient from '@src/service/queryClient';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </QueryClientProvider>
    
  );
}

export default App;
