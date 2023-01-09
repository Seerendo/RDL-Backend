const Sequelize = require('sequelize');

const ParamsModel = require('../models/params');
const ProcessModel = require('../models/processes');

const sequelize = new Sequelize(
    'rdl',
    'root',
    '1234',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const Param = ParamsModel(sequelize, Sequelize);
const Process = ProcessModel(sequelize, Sequelize);

sequelize.sync({force: false})
.then(() => {
    console.log('Sincro Exitosa!');
});

module.exports = {
    Param,
    Process
}