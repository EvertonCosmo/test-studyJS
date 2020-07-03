import Axios, { AxiosResponse } from 'axios';
import { create, ApiResponse } from 'apisauce';
import { ResponseApi, Request } from './models';

const axios = create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v2/',
});
// Gets the frequency of births per decade for the name queried
async function getFrequencyName(name: string) {
  const response: any = await axios.get(
    `censos/nomes/${name.charAt(0).toUpperCase() + name.slice(1)}`
  );

  return response;
}
export { getFrequencyName };
