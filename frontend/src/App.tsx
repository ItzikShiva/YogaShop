import { ChakraProvider, Container, VStack } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <ChakraProvider>
      <LanguageProvider>
        <Router>
          <VStack spacing={0} align="stretch" minH="100vh">
            <Header />
            <Container maxW="container.xl" py={8}>
              <Products />
            </Container>
          </VStack>
        </Router>
      </LanguageProvider>
    </ChakraProvider>
  );
}

export default App; 