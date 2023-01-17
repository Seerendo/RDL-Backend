module.exports = (sequelize, type) => {
  return sequelize.define('units', {
    unit_id: {
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
    timestamps: false,
  });
};
