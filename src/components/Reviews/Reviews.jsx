import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'Services/api_service';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(response => setReviews(response));
  }, [movieId]);

  return (
    reviews && (
      <>
        <ul>
          {reviews.results.map(el => (
            <li key={el.id}>
              <h3>Author: {el.author}</h3>
              <p>{el.content}</p>
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default Reviews;
