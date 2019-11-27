import axios from 'axios';

const token = process.env.PIPEDRIVE_KEY;

const api = axios.create({
  baseURL: `https://api.pipedrive.com/v1/deals?status=won&start=0&api_token=${token}`
});

export default api;
