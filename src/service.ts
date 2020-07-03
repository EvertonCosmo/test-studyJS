import Axios, { AxiosResponse } from 'axios';
import { ResponseApi } from './models';

const axios = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});
async function getAllPokemon() {
  const response: ResponseApi<any> = await axios.get('pokemon?limit=493');
  return response;
}
export { getAllPokemon };
