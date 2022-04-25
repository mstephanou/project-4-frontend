import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const baseUrl = 'http://localhost:8000';
const GamesList = () => {
  const [games, setGames] = React.useState(null);
  const [gameSearch, setGameSearch] = React.useState(null);
  const [title, setTitle] = React.useState('');

  React.useEffect(() => {
    console.log('request being made');
    const getAllGames = async () => {
      const response = await axios.get(`${baseUrl}/games/`);
      setGames(response.data);
    };
    getAllGames();
  }, []);

  React.useEffect(() => {
    const getGameSearch = async (title) => {
      console.log(title);
      const response = await axios.get(
        `${baseUrl}/games/search/?game_title=${title}`
      );
      setGameSearch(response.data);
    };
    getGameSearch();
  }, [title]);

  const handleChange = (e) => setTitle(e.target.value);

  return (
    <div>
      <h1 className='title is-2'>Latest reviews</h1>
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
              value={title}
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
