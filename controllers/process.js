const { Process } = require('../config/config');
const { Op } = require('sequelize');

const getProcess = async (req, res) => {
  const process = await Process.findAll();
  res.json(process);
};

module.exports = {
  getProcess,
};
