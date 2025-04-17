import React, { lazy, Suspense } from 'react';
import MovieListPage from './pages/MovieListPage/MovieListPage';
import MoviesTopSection from './components/MoviesTopSection/MoviesTopSection';
import MovieDetailsLoader from './api/routes/MovieDetailsLoader';
import Loader from './components/shared/Loader/Loader';
import { createBrowserRouter, RouterProvider } from 'react-router';

const MovieDetails = lazy(() => import('./components/MovieDetails/MovieDetails'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieListPage />,
    children: [
      { path: '/', element: <MoviesTopSection /> },
      {
        path: '/:movieId',
        element: (
          <Suspense fallback={<Loader />}>
            <MovieDetails />
          </Suspense>
        ),
        loader: MovieDetailsLoader
      }
    ]
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;
