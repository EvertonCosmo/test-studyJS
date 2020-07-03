import { strictEqual, deepStrictEqual } from 'assert';
import { ResponseApi, Result } from './models';
import { getAllPokemon } from './service';

describe('Pokémon Api  (GET ALL POKEMON)', function () {
  it('search pokemon limit 493 lenght ', async () => {
    const expected: ResponseApi<Result> = {} as ResponseApi<Result>;
    const result = await getAllPokemon();
    deepStrictEqual(result, expected);
  });
});
