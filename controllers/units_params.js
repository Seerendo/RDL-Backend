const { UnitParam } = require('../config/config');
const { Op } = require('sequelize');

const getUnitsParams = async (req, res) => {
  const unitsParams = await UnitParam.findAll();
  res.json(unitsParams);
};

//Obtener la descripcion del parametro con cada unidad vinculada a este
const getParamDescriptionAndUnitDescription = async (req, res) => {
  const unitsParams = await UnitParam.findAll({
    where: {
      param_id: req.body.param_id,
    },
  });
};

module.exports = {
  getUnitsParams,
};
