const Mention = require('../models/Mention');

module.exports = {
  async store(req, res) {
    const { name, mention, current_date } = req.body;
    let mentionPhrase = await Mention.findOne({ name });
    if (!mentionPhrase) {
      mentionPhrase = await Mention.create({
        name,
        mention,
        current_date
      });
    }
    return res.json(mentionPhrase);
  },

  async index(req, res) {
    //
  },

  async update(req, res) {
    //
  },

  async destroy(req, res) {
    //
  }
};