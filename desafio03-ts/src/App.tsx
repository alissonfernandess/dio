import {
  ChakraProvider
} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import {  AppContextProvider } from './components/AppContext';
import { Layout } from './components/Layout';
import { LoginContextProvider } from './components/LoginContext';
import MainRoutes from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';

function App() {

  !getAllLocalStorage() && createLocalStorage()

  return (
    <BrowserRouter>

    <LoginContextProvider>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            < MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </LoginContextProvider>
    </BrowserRouter>
  );
}

export default App;
  