import axios from "axios";

const starWarsAPI = axios.create({
  baseURL: "https://swapi.dev/api",
});

export const getSingleCharacter = (id) => {
  return starWarsAPI.get(`/people/${id}`).then(({ data }) => {
    return data;
  });
};
