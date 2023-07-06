const db = require("../models/index");
const { Op } = require("sequelize");
const Param = db["param"];
const Unit = db["unit"];
const UnitParam = db["unit_param"];

class UnitParamController {
  //Inner Join entre la tabla relación de UnitParam y las tablas Param - Unit
  getUnitByParam = async (req, res) => {
    const getUnitParam = await Param.findAll({
      include: [
        {
          model: Unit,
          required: true,
          attributes: ["unitId", "description", "active"],
        },
      ],
    });
    res.status(200).json(getUnitParam);
  };
}

module.exports = UnitParamController;
