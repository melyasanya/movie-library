import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Layout } from './Layout/Layout';
import { MovieDetail } from './MovieDetails/MovieDetails';
import { Movies } from './Movies/Movies';

export const App = () => {
  return (
    <>
      <Layout>
        <Routes path="/">
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetail />}>
            <Route path="cast" />
            <Route path="reviews" />
          </Route>
        </Routes>
      </Layout>
    </>
  );
};
