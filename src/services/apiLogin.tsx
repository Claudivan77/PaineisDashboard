import axios from 'axios';

const baseURL = import.meta.env.VITE_APP_API_LOGIN_BASE_URL;

const token = import.meta.env.VITE_APP_API_TOKEN;

export const apiLogin = axios.create({
  baseURL: baseURL,

  headers: {
    Authorization: 'Basic ' + token,

    'Content-type': 'application/json',
  },
});