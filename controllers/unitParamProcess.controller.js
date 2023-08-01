const db = require("../models/index");
const { Op } = require("sequelize");
const Param = db["param"];
const Unit = db["unit"];
const Process = db["process"];

class UnitParamProcessController {
  //Inner Join entre la tabla relación de UnitParamProcess
  getUnitByParam = async (req, res) => {
    const getUnitParam = await Param.findAll({
      attributes: ["description", "active", "cuali", "field"],
      include: [
        {
          model: Process,
          as: "processes",
          required: true,
          attributes: ["description", "search", "active"],
        },
        {
          model: Unit,
          as: "units",
          required: true,
          attributes: ["description", "search", "active"],
        },
      ],
      where: {
        description: {
          [Op.like]: "%" + req.body.description ?? "" + "%",
        },
      },
    });
    res.status(200).json(getUnitParam);
  };

  //Crear relación de Unidad-Parametro-Proceso
  createUPP = async (req, res) => {
    const { body } = req;
    try {
      const param = await Param.create({
        paramId: body.paramId,
        description: body.description,
        cuali: body.cuali,
        search: body.cuali,
        active: body.active,
        field: body.field,
      });
      res.status(201).json(param.dataValues);
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = UnitParamProcessController;
