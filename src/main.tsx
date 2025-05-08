import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import page components
import HomePage from './pages/HomePage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import WorksPage from './pages/WorksPage';
import About from './pages/About';
import WorkDisplayPage from './pages/WorkDisplayPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App component will render Navbar, Footer, and Outlet for children
    children: [
      {
        index: true, // Default child route for "/"
        element: <HomePage />,
      },
      {
        path: "blog",
        element: <BlogListPage />,
      },
      {
        path: "blog/:slug",
        element: <BlogPostPage />,
      },
      {
        path: "works",
        element: <WorksPage />,
      },
      {
        path: "works/:workId", // Matches the setup in previous steps
        element: <WorkDisplayPage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*", // Catch-all for 404
        element: <NotFoundPage />,
      }
    ],
  },
]);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);