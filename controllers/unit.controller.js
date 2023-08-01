const db = require("../models/index");
const { Op } = require("sequelize");
const Unit = db["unit"];

class UnitController {
  //Listar todas las unidades
  getUnits = async (req, res) => {
    try {
      const units = await Unit.findAll();
      res.status(200).json(units);
    } catch (error) {
      console.log(error);
    }
  };

  //Filtrar unidad por descripción
  getUnitByDescription = async (req, res) => {
    try {
      const units = await Unit.findAll({
        where: {
          description: {
            [Op.like]: "%" + req.body.description + "%",
          },
        },
      });
      if (units) {
        res.json(units);
      } else {
        res.send("No se encontró la unidad" + req.body);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Crear unidad
  createUnit = async (req, res) => {
    const units = await Unit.create({
      description: req.body.description,
      active: req.body.active,
    });
    res.json(units.dataValues);
  };

  //Crear lote de unidades
  createMultiUnits = async (req, res) => {
    const unit = await Unit.bulkCreate(req.body);
    res.send(unit.length + " Datos Ingresados");
  };
}

module.exports = UnitController;
