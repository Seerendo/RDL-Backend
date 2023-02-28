const { Param, Unit, User, Spec } = require('../models/index');

//Association Param-Unit (n,n)
Param.belongsToMany(Unit, {
  through: 'unit_params',
  foreignKey: 'param_id',
});

Unit.belongsToMany(Param, {
  through: 'unit_params',
  foreignKey: 'unit_id',
});

//Association User-Spec (1,n)
User.hasMany(Spec);
Spec.belongsTo(User);

//Association SpecData

