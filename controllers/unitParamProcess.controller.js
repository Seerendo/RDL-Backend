const db = require("../models/index");
const { Op } = require("sequelize");
const Param = db["param"];
const Unit = db["unit"];
const Process = db["process"];

class UnitParamProcessController {
  //Inner Join entre la tabla relación de UnitParam y las tablas Param - Unit
  getUnitByParam = async (req, res) => {
    const getUnitParam = await Param.findAll({
      attributes: ["description", "active"],
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
    });
    res.status(200).json(getUnitParam);
  };
}

module.exports = UnitParamProcessController;
