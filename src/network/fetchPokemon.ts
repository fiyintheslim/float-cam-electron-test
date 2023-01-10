import { AxiosResponse } from "axios";
import { baseURL } from "./baseURL";
import { PokemonList, Pokemon } from "./types";

export async function fetchAllPokemon(page: number) {
  let offset = 20;
  const response: AxiosResponse<PokemonList> = await baseURL.get(
    `/pokemon?offset=${20 * page}&limit${20}`
  );

  return response.data;
}

export async function fetchPokemon(pokemon?: string) {
  const response: AxiosResponse<Pokemon> = await baseURL.get(
    `/pokemon/${pokemon}`
  );

  return response.data;
}
