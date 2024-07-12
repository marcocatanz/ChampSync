import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.tsx'
import { StoreProvider } from './store/index.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <ChakraProvider>
          <App />
      </ChakraProvider>
    </StoreProvider>
  </React.StrictMode>,
)
