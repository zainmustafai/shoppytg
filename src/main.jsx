import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { _routes } from './_routes.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js';
const BrowserRouter = createBrowserRouter(_routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider
      store={store}
    >
      <ChakraProvider theme={theme}>
        <RouterProvider router={BrowserRouter} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
)
