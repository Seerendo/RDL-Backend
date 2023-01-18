module.exports = (sequelize, type) => {
  return sequelize.define('units_params', {
    param_id: {
      type: type.INTEGER,
      allowNull: false,
    },
    unit_id: {
      type: type.INTEGER,
      allowNull: false,
    },
    active: {
      type: type.BOOLEAN,
      defaultValue: true,
    },
  });
};
