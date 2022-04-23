import React from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';

const baseUrl = 'http://localhost:8000';

const GameCard = () => {
  const [singleGame, setSingleGame] = React.useState(null);
  const { id } = useParams();
  React.useEffect(() => {
    console.log('request being made');
    const getSingleGame = async () => {
      const response = await axios.get(`${baseUrl}/games/detail/${id}`);
      setSingleGame(response.data);
      console.log(response.data);
    };

    getSingleGame();
  }, [id]);
  if (singleGame === null) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <article>
        <p>{singleGame.title}</p>

        <figure>
          <img src={singleGame.image} alt={singleGame.title} width='100' />
        </figure>
        <p>{singleGame.developer.title}</p>
        {singleGame.reviews.map((review) => (
          <div key={review.id}>
            <div>{review.text}</div>
          </div>
        ))}
        {singleGame.categories.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </article>
    </>
  );
};

export default GameCard;
