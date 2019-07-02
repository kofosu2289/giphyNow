import axios from 'axios';
import { KEY } from '../secret';

const URL = `https://api.giphy.com/v1/gifs/`;

export const feedGifs = async (offset) => {
  const response = await axios.get(`${URL}trending?api_key=${KEY}&offset=${offset}&`);
  return response.data.data;
}

export const searchGifs = async (query) => {
  const response = await axios.get(`${URL}search?api_key=${KEY}&q=${query}&limit=100`);
  return response.data.data;
}