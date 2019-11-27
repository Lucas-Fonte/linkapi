import axios from 'axios';

const api = axios.create({
  baseURL: `https://bling.com.br/Api/v2/`
});

api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default api;
