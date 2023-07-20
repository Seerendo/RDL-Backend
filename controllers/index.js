const Param = require("./param.controller");
const Unit = require("./unit.controller");
const UnitParamProcess = require("./unitParamProcess.controller");
const ParamController = new Param();
const UnitController = new Unit();
const UnitParamProcessController = new UnitParamProcess();

module.exports = {
  ParamController,
  UnitController,
  UnitParamProcessController,
};
