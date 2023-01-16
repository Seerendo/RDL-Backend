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

const getParamByFieldAndDescription = async (req, res) => {
  const param = await Param.findAll({
    where: {
      description: {
        [Op.like]: '%' + req.body.param + '%',
      },
      [Op.and]: [
        {
          field: {
            [Op.like]: '%' + req.body.field + '%',
          },
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
  const param = await Param.create({
    description: req.body.param,
    cuali: req.body.cuali,
    active: req.body.active,
    field: req.body.field,
  });
  res.json(param.dataValues);
};

const createMultiParams = async (req, res) => {
  const param = await Param.bulkCreate(req.body);
  res.send(param.length + ' Datos Ingresados');
};

const updateParam = async (req, res) => {
  const param = await Param.update(
    { description: req.body.param },
    {
      where: {
        id_param: req.body.id,
      },
    }
  );
};

module.exports = {
  getParams,
  getParamsByDescription,
  getParamsByField,
  getParamByFieldAndDescription,
  createParam,
  createMultiParams,
  updateParam,
};
