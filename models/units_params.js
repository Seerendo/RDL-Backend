module.exports = (sequelize, type) => {
  return sequelize.define('unit_param', {
    param_id: {
      type: type.INTEGER,
    },
    unit_id: {
      type: type.INTEGER,
    },
    active: {
      type: type.ENUM,
      values: ['false', 'true'],
      defaultValue: 'true',
    },
    timestamps: false,
  });
};
