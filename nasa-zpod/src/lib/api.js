/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export function getAPOD(date = '') { // date = '' === date가 없을시 공백 처리
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=x5vPVqUkY0EFLlWcGcZJsnYNwquIt0hm0pwjEpsW&date=${date}&hd=${true}`);
}
