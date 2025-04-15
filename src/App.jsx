import React, { lazy, Suspense } from 'react';
import MovieListPage from './pages/MovieListPage/MovieListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MoviesTopSection from './components/MoviesTopSection/MoviesTopSection';
import MovieDetailsLoader from './api/routes/MovieDetailsLoader';
import Loader from './components/shared/Loader/Loader';

const MovieDetails = lazy(() => import('./components/MovieDetails/MovieDetails'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <MovieListPage />
      </>
    ),
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
