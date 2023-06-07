import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Layout } from './Layout/Layout';
import { Movies } from './Movies/Movies';

export const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Layout>
    </>
  );
};
