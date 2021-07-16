import axios from 'axios';

const axiosClient = axios.create({
  baseURL: ``,
  responseType: 'json',
  timeout: 15 * 1000,
  transformResponse: [
    (data) =>  data,
  ],
});

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle error
    console.error(error);
  },
);

export default axiosClient;
