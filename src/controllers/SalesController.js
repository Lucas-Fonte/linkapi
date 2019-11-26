import pipedrive_api from '../services/pipedrive_api';

class SalesController {
  async index(req, res) {
    const response = await pipedrive_api.get();
    const deals = response.data.data.map(({ id, title, status }) => ({
      id,
      title,
      status
    }));

    return res.json(deals);
  }
}

export default new SalesController();
