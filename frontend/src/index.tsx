import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './routes/About';
import Auth from './routes/Auth'
import Reservation from './routes/Reservation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element:<About />
      },
      {
        path: '/reservation',
        element:<Reservation />
      },
      {
        path: '/auth',
        element:<Auth />
      }
    ]
  }
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
