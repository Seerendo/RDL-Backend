module.exports = (sequelize, type) => {
  return sequelize.define('process', {
    process_id: {
      type: type.STRING,
      primaryKey: true,
    },
    description: type.STRING,
    timestamps: false,
  });
};
