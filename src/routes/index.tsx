import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Feed = lazy(() => import('../pages/Feed'));

export function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Feed />
    }
  ]);

  return <RouterProvider router={router} />;
}