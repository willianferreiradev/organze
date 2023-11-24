import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// import { Home } from './pages/Home/index.tsx';
// import { Room } from './pages/Room/index.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // children: [
    //   {
    //     path: '/',
    //     element: <Home />,
    //   },
    //   {
    //     path: 'room/:id',
    //     element: <Room />,
    //   },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
