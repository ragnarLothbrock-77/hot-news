import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AboutPage } from './pages/About';
import { AppThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n.config';
import { NotFoundPage } from 'pages/NotFound';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { MainPage } from 'pages/Main';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <ErrorBoundary><App /></ErrorBoundary>,
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
          <AboutPage />
        </Suspense>
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <AppThemeProvider>
        <RouterProvider router={router} />
      </AppThemeProvider>
    </StoreProvider>
  </React.StrictMode>
)
