const { Spec } = require('../config/config');
const { Op } = require('sequelize');

const getSpecs = async (req, res) => {
  const specs = await Spec.findAll();
  res.json(specs);
};

const createSpec = async (req, res) => {
  const specs = await Spec.create({
    spec_id: req.body.spec_id,
    description: req.body.description,
    status: req.body.status,
    spec_type: req.body.spec_type,
    user_id: req.body.user_id,
  });
  res.json(specs.dataValues);
};

module.exports = {
  getSpecs,
  createSpec,
};
