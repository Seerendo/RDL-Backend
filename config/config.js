const Sequelize = require('sequelize');

const ParamsModel = require('../models/params');
const ProcessModel = require('../models/processes');
const UnitModel = require('../models/units');
const UnitParamModel = require('../models/units_params');
const SpecModel = require('../models/specs');

/* const sequelize = new Sequelize('rdl', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
}); */

//Prueba de BD Server
const sequelize = new Sequelize(
  'rdl',
  '1ud2si3zh3dnz4gk5cq2',
  'pscale_pw_CVOS72DCFvOeOM2QAzOk6TAce2GvnEkcADSXOPCjPOD',
  {
    host: 'us-east.connect.psdb.cloud',
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  }
);

const Param = ParamsModel(sequelize, Sequelize);
const Process = ProcessModel(sequelize, Sequelize);
const Unit = UnitModel(sequelize, Sequelize);
const UnitParam = UnitParamModel(sequelize, Sequelize);
const Spec = SpecModel(sequelize, Sequelize);

/* Param.hasMany(UnitParam);
Process.hasMany(UnitParam);
UnitParam.belongsTo(Param);
UnitParam.belongsTo(Process); */

sequelize.sync({ force: false }).then(() => {
  console.log('Sincro Exitosa!');
});

module.exports = {
  Param,
  Process,
  UnitParam,
  Unit,
  Spec,
};
