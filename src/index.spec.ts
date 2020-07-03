import Nock, { isDone } from 'nock';
import { strictEqual, deepStrictEqual } from 'assert';
import Chai, { should } from 'chai';
import { ResponseApi, Result, Request } from './models';
import { getFrequencyName } from './service';
import { AxiosResponse } from 'axios';
import { ApiResponse } from 'apisauce';
const result: any = {
  problem: null,
  originalError: null,
  ok: true,
  status: 200,
  headers: {
    server: 'Apache/2.4.6 (CentOS) OpenSSL/1.0.2k-fips mod_qos/11.5',
    'content-type': 'application/json',
    'content-length': '445',
    'cache-control': 'max-age=1',
    expires: 'Fri, 03 Jul 2020 16:58:41 GMT',
    'access-control-allow-methods': 'GET',
    'access-control-allow-origin': '*',
    connection: 'close',
  },
  config: {
    url: 'censos/nomes/Everton',
    method: 'get',
    params: {},
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': 'axios/0.19.2',
    },
    baseURL: 'https://servicodados.ibge.gov.br/api/v2/',
    timeout: 0,

    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,

    data: undefined,
  },
  data: [{ nome: 'EVERTON', sexo: null, localidade: 'BR', res: [Array] }],
};
describe('IBGE (GET FREQUENCY NAME)', function () {
  it('search for the frequency of the name `Everton` in brazil ', async () => {
    // const response = await getFrequencyName('everton');
    Nock('https://servicodados.ibge.gov.br/api/v2')
      .get('/censos/nomes/Everton') // expected name 'Everton'
      .reply(200, result);
    // deepStrictEqual(response, result);
  });
});
