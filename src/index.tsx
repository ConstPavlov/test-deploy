import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const rootElem = document.getElementById('root');
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
]);
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(<RouterProvider router={router} />);
}
