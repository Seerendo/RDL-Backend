module.exports = (sequelize, type) => {
  return sequelize.define('units', {
    id_unit: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: type.STRING,
    active: {
      type: type.ENUM,
      values: ['false', 'true'],
      defaultValue: 'true',
    },
  });
};
