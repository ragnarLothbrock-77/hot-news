import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from './pages/About';
import { AppThemeProvider } from 'app/providers/ThemeProvider';

import 'shared/config/i18n/i18n.config';

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback="Loading..."><App /></Suspense>,
    children: [
      {
        path: '/about',
        element: <Suspense fallback="Loading..."><About /></Suspense>
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  </React.StrictMode>
)
