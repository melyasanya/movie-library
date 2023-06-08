import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'Services/api_service';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [movie, setMovie] = useState(query);
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    getMovieByName(query).then(movies => {
      setMovies(movies.results);
    });
  }, [query]);

  const onChange = e => {
    setMovie(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: movie });
    e.target.elements.input.value = '';
  };

  return (
    <>
      <form className="SearchForm" onSubmit={onSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={onChange}
        />
      </form>
      {movies && (
        <ul>
          {movies.map(el => (
            <Link key={el.id} to={`/movies/${el.id}`} state={location}>
              <li>{el.title}</li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
