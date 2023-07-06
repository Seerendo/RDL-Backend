const db = require("../models/index");
const { Op } = require("sequelize");
const Param = db["param"];

class ParamsController {
  //Obtener todos los paramatros
  getParams = async (req, res) => {
    const params = await Param.findAll();
    res.status(200).json(params);
  };

  //Obtener parametros por descripcion
  getParamsByDescription = async (req, res) => {
    const param = await Param.findAll({
      where: {
        description: {
          [Op.like]: "%" + req.body.description + "%",
        },
      },
    });
    if (param) {
      res.status(200).json(param);
    } else {
      res.send("No se encontró el dato" + req.body);
    }
  };

  //Obtener parametros por Field. Ej: FISICO & QUIMICO
  getParamsByField = async (req, res) => {
    const param = await Param.findAll({
      where: {
        field: {
          [Op.like]: "%" + req.body.field + "%",
        },
      },
    });
    if (param) {
      res.status(200).json(param);
    } else {
      res.send("No se encontró el dato" + req.body);
    }
  };

  //Obtener parametros por field y descripcion. Ej: INSTRUMENTAL & NMR 20°C
  getParamByFieldAndDescription = async (req, res) => {
    const param = await Param.findAll({
      where: {
        description: {
          [Op.like]: "%" + req.body.description + "%",
        },
        [Op.and]: [
          {
            field: {
              [Op.like]: "%" + req.body.field + "%",
            },
          },
        ],
      },
    });
    if (param) {
      res.status(200).json(param);
    } else {
      res.send("No se encontró el dato" + req.body);
    }
  };

  //Crear parametro
  createParam = async (req, res) => {
    const param = await Param.create(
      {
        description: req.body.description,
        cuali: req.body.cuali,
        active: req.body.active,
        field: req.body.field,
        units: [
          {
            description: req.body.unitDescription,
          },
        ],
      },
      {
        include: "units",
      }
    );
    res.status(201).json(param.dataValues);
  };

  //Cargar lote de parámetros
  createMultiParams = async (req, res) => {
    const param = await Param.bulkCreate(req.body);
    res.send(param.length + " Datos Ingresados");
  };

  //Actualizar parametro por ID
  updateParam = async (req, res) => {
    const param = await Param.update(
      { description: req.body.description },
      {
        where: {
          param_id: req.body.param_id,
        },
      }
    );
  };
}

module.exports = ParamsController;