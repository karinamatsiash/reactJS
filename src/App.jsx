import React, { lazy, Suspense } from 'react';
import MovieListPage from './pages/MovieListPage/MovieListPage';
import MoviesTopSection from './components/MoviesTopSection/MoviesTopSection';
import MovieDetailsLoader from './api/routes/MovieDetailsLoader';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { AddMovieForm } from './components/AddMovieForm/AddMovieForm';
import GeneralLoader from './components/shared/GeneralLoader/GeneralLoader';

const MovieDetails = lazy(() => import('./components/MovieDetails/MovieDetails'));
const EditMovieForm = lazy(() => import('./components/EditMovieForm/EditMovieForm'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieListPage />,
    children: [
      {
        path: '/',
        element: <MoviesTopSection />,
        children: [
          { path: '/new', element: <AddMovieForm /> },
          {
            path: '/:movieId/edit',
            element: (
              <Suspense fallback={<GeneralLoader />}>
                <EditMovieForm />
              </Suspense>
            ),
            loader: MovieDetailsLoader
          }
        ]
      },
      {
        path: '/:movieId',
        element: (
          <Suspense fallback={<GeneralLoader />}>
            <MovieDetails />
          </Suspense>
        ),
        loader: MovieDetailsLoader
      }
    ]
  }
]);

const App = () => <RouterProvider router={router} fallbackElement={<GeneralLoader />} />;

export default App;
