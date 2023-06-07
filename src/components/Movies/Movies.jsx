import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMovieByName } from 'Services/api_service';

export const Movies = () => {
  const [movie, setMovie] = useState('');
  const [movies, setMovies] = useState([]);

  const onSubmit = e => {
    e.preventDefault();
    setMovie(e.target.elements.input.value);
    e.target.elements.input.value = '';
  };

  useEffect(() => {
    getMovieByName(movie).then(movies => {
      setMovies(movies.results);
    });
  }, [movie]);

  return (
    <>
      {' '}
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
        />
      </form>
      {movies && (
        <ul>
          {movies.map(el => (
            <Link key={el.id} to={`/movies/${el.id}`}>
              <li>{el.title}</li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};
