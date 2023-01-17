const { Param } = require('../config/config');
const { Op } = require('sequelize');

//Obtener todos los paramatros
const getParams = async (req, res) => {
  const params = await Param.findAll();
  res.json(params);
};

//Obtener parametros por descripcion
const getParamsByDescription = async (req, res) => {
  const param = await Param.findAll({
    where: {
      description: {
        [Op.like]: '%' + req.body.description + '%',
      },
    },
  });
  if (param) {
    res.json(param);
  } else {
    res.send('No se encontró el dato' + req.body);
  }
};

//Obtener parametros por Field. Ej: FISICO & QUIMICO
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

//Obtener parametros por field y descripcion. Ej: INSTRUMENTAL & NMR 20°C
const getParamByFieldAndDescription = async (req, res) => {
  const param = await Param.findAll({
    where: {
      description: {
        [Op.like]: '%' + req.body.description + '%',
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

//Crear parametro
const createParam = async (req, res) => {
  const param = await Param.create({
    description: req.body.description,
    cuali: req.body.cuali,
    active: req.body.active,
    field: req.body.field,
  });
  res.json(param.dataValues);
};

//Cargar multiples parametros
const createMultiParams = async (req, res) => {
  const param = await Param.bulkCreate(req.body);
  res.send(param.length + ' Datos Ingresados');
};

//Actualizar parametro por ID
const updateParam = async (req, res) => {
  const param = await Param.update(
    { description: req.body.description },
    {
      where: {
        param_id: req.body.param_id,
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
