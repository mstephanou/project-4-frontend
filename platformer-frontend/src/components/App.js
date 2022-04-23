import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import '../styles/output.css';
import { baseUrl } from '../helpers/api';
import GamesList from './GamesList';
import Game from './Game';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Login from './auth/Login';

const App = () => {
  useEffect(() => {
    console.log('request being made');
    const getAllGames = async () => {
      const response = await axios.get(`${baseUrl}/games/`);
      console.log(response.data);
    };
    getAllGames();
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/games' element={<GamesList />} />
        <Route path='/games/:id' element={<Game />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
