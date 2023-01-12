const { Param } = require('../config/config');
const { Op } = require('sequelize');

const getParams = async (req, res) => {
  const params = await Param.findAll();
  res.json(params);
};

const getParamsByDescription = async (req, res) => {
  const param = await Param.findAll({
    where: {
      description: {
        [Op.like]: '%' + req.body.param + '%',
      },
    },
  });
  if (param) {
    res.json(param);
  } else {
    res.send('No se encontró el dato' + req.body);
  }
};

const getParamsByField = async (req, res) => {
  const param = await Param.findAll({
    where: {
      field: {
        [Op.like]: '%' + req.body.field + '%',
      },
    },
  });
  if (param) {
    res.json(param);
  } else {
    res.send('No se encontró el dato' + req.body);
  }
};

const getParamFieldAndDescription = async (req, res) => {
  const param = await Param.findAll({
    where: {
      description: {
        [Op.like]: '%' + req.body.param + '%',
      },
      [Op.and]: [
        {
          field: {
            [Op.like]: '%' + req.body.field + '%',
          }
        },
      ],
    },
  });
  if (param) {
    res.json(param);
  } else {
    res.send('No se encontró el dato' + req.body);
  }
};

const createParam = async (req, res) => {
  const param = await Param.create(
    {
      description: req.body.param,
      cuali: req.body.cuali,
      active: req.body.active,
      field: req.body.field
    }
  );
  res.json(param.dataValues);
};

module.exports = {
  getParams,
  getParamsByDescription,
  getParamsByField,
  getParamFieldAndDescription,
  createParam
};
