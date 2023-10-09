import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hiragana from './pages/Hiragana.tsx';
import Home from './pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: "/learn-nihon/",
    element: <App />,
    children: [
      {
        path: "/learn-nihon/",
        element: <Home />,
      },
      {
        path: "/learn-nihon/hiragana",
        element: <Hiragana />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
