import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from './pages/About';
import { AppThemeProvider } from 'app/providers/ThemeProvider';

import 'shared/config/i18n/i18n.config';
import { NotFound } from 'pages/NotFound';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { MainPage } from 'pages/Main';

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Suspense fallback={<PageLoader />}>
          <MainPage />
        </Suspense>
      },
      {
        path: '/about',
        element: <Suspense fallback={<PageLoader />}>
          <About />
        </Suspense>
      },
      {
        path: '*',
        element: <NotFound />
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
