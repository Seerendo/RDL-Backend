const { Param, Unit } = require('../models/index');

Param.belongsToMany(Unit, {
    through: 'unit_params',
    foreignKey: 'param_id'
});

Unit.belongsToMany(Param, {
    through: 'unit_params',
    foreignKey: 'unit_id'
});