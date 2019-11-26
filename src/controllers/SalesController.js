import pipedrive_api from '../services/pipedrive_api';

class SalesController {
  async index(req, res) {
    const response = await pipedrive_api.get();

    return res.get(response);
  }
}

export default new SalesController();
