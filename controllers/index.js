const Param = require("./param.controller");
const Unit = require("./unit.controller");
const UnitParam = require("./unit_param.controller");
const ParamController = new Param();
const UnitController = new Unit();
const UnitParamController = new UnitParam();

module.exports = {
  ParamController,
  UnitController,
  UnitParamController,
};
