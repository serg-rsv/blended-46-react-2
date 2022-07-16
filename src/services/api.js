import axios from 'axios';

// https://api.themoviedb.org/3/movie/550?api_key={API_KEY}
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '5ce599886a4c0703a030654068991e03';

axios.defaults.baseURL = BASE_URL;

export const getMovies = (page) =>
  axios.get(`trending/movie/week?api_key=${API_KEY}&page=${page}`);
