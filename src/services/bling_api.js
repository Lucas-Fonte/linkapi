import axios from 'axios';

const token = '1b26b8627e803ae2ee83134809fe83b11889e044';

//https://api.pipedrive.com/v1/deals?status=all_not_deleted&start=0&api_token=1b26b8627e803ae2ee83134809fe83b11889e044
const api = axios.create({
  baseURL: `https://factorello.pipedrive.com/v1/deals?api_token=${token}`
});

const api = axios.create({
  baseURL: `https://api.pipedrive.com/v1/deals?status=all_not_deleted&start=0&api_token=${token}`
});

export default api;
