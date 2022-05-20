import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const baseUrl = 'https://msplatformer.herokuapp.com';
const GamesList = () => {
  const [games, setGames] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    console.log('request being made');
    const getAllGames = async () => {
      const response = await axios.get(`${baseUrl}/games/`);
      setGames(response.data);
    };
    getAllGames();
  }, []);

  React.useEffect(() => {
    const performSearchQuery = async () => {
      console.log(`Doing a search for ${searchQuery}`);
      const response = await axios.get(
        `${baseUrl}/games/search/?game_title=${searchQuery}`
      );
      setGames(response.data);
    };
    performSearchQuery();
  }, [searchQuery]);

  const handleChange = (e) => setSearchQuery(e.target.value);

  return (
    <div>
      <h1 className='title is-3'>Latest reviews</h1>
      {!games ? (
        <h1 className='title is-4'>No reviews to list</h1>
      ) : (
        <section className='section'>
          <div className='container'>
            <input
              className='input is-info'
              type='text'
              placeholder='What game are you looking for?'
              onChange={handleChange}
              value={searchQuery}
            ></input>
            <div className='columns is-multiline'>
              {games.map((game) => (
                <div key={game.id} className='column is-one-quarter'>
                  <div key={game.id}>
                    <Link key={game.id} to={`/games/${game.id}`}>
                      {game.title}
                    </Link>
                    <img
                      className='image is-128x128'
                      style={{ objectFit: 'contain' }}
                      src={game.image}
                    />
                    <div>{game.developer.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default GamesList;
