import Opportunity from '../models/Oportunity';

class OpportunityController {
  async index(req, res) {
    const opportunities = await Opportunity.find();
    return res.json(opportunities);
  }
}

export default new OpportunityController();
