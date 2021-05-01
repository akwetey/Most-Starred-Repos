/* eslint-disable */
import axios from "./axios";
export default {
  index(page: number) {
    return axios.get(
      `/search/repositories?q=created:<2021-04-01&sort=stars&order=desc&page=${page}`
    );
  },
};
