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
      console.log(error);
    }
  };

  //Obtener parametros por descripcion
  getParamsByDescription = async (req, res) => {
    const { body } = req;
    try {
      const params = await Param.findAll({
        where: {
          description: {
            [Op.like]: "%" + body.description + "%",
          },
        },
      });
      if (params) {
        res.status(200).json(params);
      } else {
        res.send("No existen características con esta descripción" + req.body);
      }
    } catch (error) {
      console.log(error);
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
      console.log(error);
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
      console.log(error);
    }
  };

  //Crear parametro
  createParam = async (req, res) => {
    const { body } = req;
    try {
      const param = await Param.create(body);
      res.status(201).json(body);
    } catch (error) {
      console.log(error);
    }
  };

  //Cargar lote de parámetros (DEPRECATED)
  createMultiParams = async (req, res) => {
    const param = await Param.bulkCreate(req.body);
    res.send(param.length + " Datos Ingresados");
  };

  //Actualizar parametro por ID
  updateParam = async (req, res) => {
    const { body } = req;
    try {
      const param = await Param.update(body, {
        where: {
          paramId: body.paramId,
        },
      });
      res.status(200).json(body);
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = ParamsController;
