import { ApiResponse } from 'apisauce';

export type Result = {
  periodo: string;
  frequencia: number;
};
export interface ResponseApi<T> {
  nome: string;
  sexo: string | null;
  localidade: string | null;
  res: Array<T>;
}
export interface Request extends ResponseApi<Result> {}
