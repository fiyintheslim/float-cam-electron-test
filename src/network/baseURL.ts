import axios from "axios";

export const baseURL = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
})