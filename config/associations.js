const { Param, Unit } = require('../models/index');

Param.belongsToMany(Unit, {
    through: 'unit_param',
    foreignKey: 'param_id'
});

Unit.belongsToMany(Param, {
    through: 'unit_param',
    foreignKey: 'unit_id'
})