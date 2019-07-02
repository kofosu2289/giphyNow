import axios from 'axios';

const URL = `https://api.giphy.com/v1/gifs/`;
const KEY = `8XADJBZWvzB75qIDyCpfWLbnE5otD7wG`;

export const feedGifs = async (offset) => {
  const response = await axios.get(`${URL}trending?api_key=${KEY}&offset=${offset}&`);
  return response.data.data;
}

export const searchGifs = async (query) => {
  const response = await axios.get(`${URL}search?api_key=${KEY}&q=${query}&limit=100`);
  return response.data.data;
}