const db = require("../models/index");
const { Op } = require("sequelize");
const Param = db["param"];

class ParamsController {
  //Obtener todos los paramatros
  getParams = async (req, res) => {
    try {
      const params = await Param.findAll();
      res.status(200).json(params);
    } catch (error) {
      httpError(res, error);
    }
  };

  //Obtener parametros por descripcion
  getParamsByDescription = async (req, res) => {
    try {
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
        res.send("No existen características con esta descripción" + req.body);
      }
    } catch (error) {
      httpError(res, error);
    }
  };

  //Obtener parametros por Field. Ej: FISICO & QUIMICO
  getParamsByField = async (req, res) => {
    try {
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
        res.send("No se encontraron características " + req.body);
      }
    } catch (error) {
      httpError(res, error);
    }
  };

  //Obtener parametros por field y descripcion. Ej: INSTRUMENTAL & NMR 20°C
  getParamByFieldAndDescription = async (req, res) => {
    try {
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
        res.send("No se encontraron características " + req.body);
      }
    } catch (error) {
      httpError(res, error);
    }
  };

  //Crear parametro
  createParam = async (req, res) => {
    const { body } = req;
    try {
      const param = await Param.create({
        description: req.body.description,
        cuali: req.body.cuali,
        active: req.body.active,
        field: req.body.field,
      });
      res.status(201).json(param.dataValues);
    } catch (error) {
      httpError(res, error);
    }
  };

  //Cargar lote de parámetros
  createMultiParams = async (req, res) => {
    const param = await Param.bulkCreate(req.body);
    res.send(param.length + " Datos Ingresados");
  };

  //Actualizar parametro por ID
  updateParam = async (req, res) => {
    try {
      const param = await Param.update(
        { description: req.body.description },
        {
          where: {
            param_id: req.body.param_id,
          },
        }
      );
    } catch (error) {
      httpError(res, error);
    }
  };
}

module.exports = ParamsController;
