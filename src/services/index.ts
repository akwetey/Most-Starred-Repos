/* eslint-disable */
import axios from "./axios";
export default {
  index() {
    return axios.get(`/search/repositories?q=created:<2021-04-01`);
  },
};
