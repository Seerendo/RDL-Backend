const Sequelize = require('sequelize');

const { ParamsModel, ProcessModel, SpecModel, UnitModel } = require('../models/index');

const sequelize = new Sequelize('rdl', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

const Param = ParamsModel(sequelize, Sequelize);
const Process = ProcessModel(sequelize, Sequelize);
const Unit = UnitModel(sequelize, Sequelize);
const Spec = SpecModel(sequelize, Sequelize);

//Associations
Param.belongsToMany(Unit, {
  through: 'units_params',
  foreignKey: 'param_id',
});
Unit.belongsToMany(Param, {
  through: 'units_params',
  foreignKey: 'unit_id'
});

sequelize.sync({ force: true }).then(() => {
  console.log('Sincro Exitosa!');
});

module.exports = {
  Param,
  Process,
  Unit,
  Spec,
};
