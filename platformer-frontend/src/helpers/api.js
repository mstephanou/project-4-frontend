import axios from 'axios';

export const baseUrl = 'http://localhost:8000';

export const getAllGames = () => {
  return axios.get(`${baseUrl}/games/`);
};

export const getSingleGame = (id) => {
  return axios.get(`${baseUrl}/games/${id}`);
};

export const updateSingleGame = (id) => {
  return axios.put(`${baseUrl}/games/${id}`);
};

export const deleteSingleGame = (id) => {
  return axios.delete(`${baseUrl}/games/${id}`);
};

export const searchGame = (title) => {
  return axios.get(`${baseUrl}/games/search/?game_title=${title}`);
};
