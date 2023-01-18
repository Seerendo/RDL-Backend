module.exports = (sequelize, type) => {
  return sequelize.define('units', {
    unit_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: type.STRING,
      allowNull: false,
    },
    active: {
      type: type.BOOLEAN,
      defaultValue: true,
    },
  });
};
