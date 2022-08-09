import React from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';

const baseUrl = 'https://msplatformer.herokuapp.com';

const SingleGame = () => {
  const [singleGame, setSingleGame] = React.useState(null);
  const { id } = useParams();
  React.useEffect(() => {
    console.log('request being made');
    const getSingleVideoGame = async () => {
      const response = await axios.get(`${baseUrl}/games/detail/${id}`);
      setSingleGame(response.data);
      console.log(response.data);
    };

    getSingleVideoGame();
  }, [id]);
  if (singleGame === null) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className='hero is-fullheight is-centered'>
        <div className='box'>
          <div className='columns is-mobile'>
            <div className='column'>
              <h1 className='title is-2'>{singleGame.title}</h1>
              <p>
                <strong>Developer:</strong> {singleGame.developer.title}
              </p>
              <p>
                <strong>Platform:</strong> {singleGame.platform}
              </p>
              {singleGame.genres.map((genre) => (
                <div key={genre.id}>
                  <div>
                    <strong>Genre: </strong>
                    {genre.title}
                    <br />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='columns'>
            <div className='column is-one-third'>
              <img src={singleGame.image} alt={singleGame.title} />
            </div>
            <div className='column'>
              <article>
                <h3>
                  <strong>Reviews:</strong>
                </h3>
                <br />
                <div className='title is-6'>
                  {singleGame.reviews.map((review) => (
                    <div key={review.id}>
                      <div>{review.text}</div>
                      <br />
                    </div>
                  ))}
                </div>
                <div className='title is-6'>
                  {singleGame.categories.map((category) => (
                    <div key={category.id}>
                      <div>
                        Categories: <br />
                        {category.name}
                      </div>
                      <br />
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleGame;
