import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const baseUrl = 'http://localhost:8000';

const GamesList = () => {
  const [games, setGames] = React.useState(null);

  React.useEffect(() => {
    console.log('request being made');
    const getAllGames = async () => {
      const response = await axios.get(`${baseUrl}/games/`);
      setGames(response.data);
    };
    getAllGames();
  }, []);

  return (
    <div>
      <h1>Games</h1>
      {!games ? (
        <h1>No games to list</h1>
      ) : (
        <div>
          {games.map((game) => (
            <Link key={game.id} to={`/games/${game.id}`}>
              <div key={game.id}>
                {game.title}
                <img src={game.image} width='100' />
                <div>{game.developer.title}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default GamesList;
