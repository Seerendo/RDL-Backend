const db = require("../models/index");
const { Op } = require("sequelize");
const Param = db["param"];
const Unit = db["unit"];
const Process = db["process"];

class UnitParamProcessController {
  //Inner Join entre la tabla relación de UnitParamProcess
  getUnitByParam = async (req, res) => {
    req.body.description = "";
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
}

module.exports = UnitParamProcessController;
