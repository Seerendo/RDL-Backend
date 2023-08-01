const db = require("../models/index");
const { Op } = require("sequelize");
const Frecuency = db["frecuency"];

class FrecuencyController {
  //Listas todas las frecuencias
  getfrecuencies = async (req, res) => {
    try {
      const frecuencies = Frecuency.findAll();
      res.status(200).json(frecuencies);
    } catch (error) {
      console.log(error);
    }
  };

  //Listar frecuencia por descripción
  getFrecuenciesByDescription = async () => {
    const { body } = req;
    try {
      const frecuencies = await Frecuency.findAll({
        where: {
          description: {
            [Op.like]: "%" + body.description + "%",
          },
        },
      });
      if (frecuencies) {
        res.status(200).json(frecuencies);
      } else {
        res.send("No existen frecuencias con esta descripción" + req.body);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Crear frecuencia
  createParam = async (req, res) => {
    const { body } = req;
    try {
      const frecuency = await Frecuency.create(body);
      res.status(201).json(body);
    } catch (error) {
      console.log(error);
    }
  };

  //Actualizar frecuencia por ID
  updateParam = async (req, res) => {
    const { body } = req;
    try {
      const frecuency = await Frecuency.update(body, {
        where: {
          frecuencyId: body.frecuencyId,
        },
      });
      res.status(200).json(body);
    } catch (error) {
      console.log(error);
    }
  };
}
