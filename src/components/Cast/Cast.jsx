import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'Services/api_service';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(response => setCast(response));
  }, [movieId]);

  return (
    cast && (
      <>
        <ul>
          {cast.cast.map(el => (
            <li key={el.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                alt=""
                className={css.image}
              />
              <p>{el.name}</p>
              <p>Character: {el.character}</p>
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default Cast;
