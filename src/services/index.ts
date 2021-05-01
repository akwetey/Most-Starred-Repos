/* eslint-disable */
import axios from "./axios";
export default {
  index(date: string, page: number) {
    return axios.get(
      `/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`
    );
  },
};
