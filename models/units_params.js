module.exports = (sequelize, type) => {
  return sequelize.define('units_params', {
    id_param: {
      type: type.INTEGER,
    },
    id_unit: {
      type: type.INTEGER,
    },
    active: {
      type: type.ENUM,
      values: ['false', 'true'],
      defaultValue: 'true',
    },
  });
};
