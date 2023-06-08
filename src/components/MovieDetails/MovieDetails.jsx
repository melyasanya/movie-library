import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'Services/api_service';
import css from './MovieDetails.module.css';

const MovieDetail = () => {
  const [movieInfo, setMovieInfo] = useState('');

  const id = useParams();

  const location = useLocation();

  useEffect(() => {
    getMovieById(id.movieId).then(response => setMovieInfo(response));
  }, [id.movieId]);

  const date = new Date(movieInfo.release_date).getFullYear();

  return (
    movieInfo && (
      <>
        <Link
          className="btn btn-primary m-3"
          role={'button'}
          to={location.state}
        >
          Back
        </Link>

        <div className={css.upper}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
              alt=""
              className={css.image}
            />
          </div>
          <div>
            <h1>
              {movieInfo.original_title} {`(${date})`}
            </h1>
            <p>User score: {Math.round(movieInfo.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
            <h3>Genres</h3>
            <ul className={css.genres}>
              {movieInfo.genres.map(el => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lower">
          <h4>Additional information</h4>
          <ul>
            <Link to={'cast'}>
              <li>Cast</li>
            </Link>
            <Link to={'reviews'}>
              <li>Reviews</li>
            </Link>
          </ul>
        </div>
        <div>
          <Outlet />
        </div>
      </>
    )
  );
};

export default MovieDetail;
