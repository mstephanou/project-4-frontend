import axios from 'axios';
import { baseUrl } from './api';

export const loginUser = (credentials) =>
  axios
    .request({
      method: 'POST',
      url: `${baseUrl}/authentication/login/`,
      data: credentials,
    })
    .then(({ data }) => {
      data.token
        ? window.sessionStorage.setItem('token', data.token)
        : window.sessionStorage.removeItem('token');

      return data;
    })
    .catch(console.error);

export const getUserbyId = (id) =>
  axios.request({
    method: 'GET',
    url: `${baseUrl}/authentication/login/${id}`,
  });

export const registerUser = (credentials) =>
  axios
    .request({
      method: 'POST',
      url: `${baseUrl}/authentication/register/`,
      data: credentials,
    })
    .then(({ data }) => {
      data.token
        ? window.sessionStorage.setItem('token', data.token)
        : window.sessionStorage.removeItem('token');

      return data;
    })
    .catch(console.error);
