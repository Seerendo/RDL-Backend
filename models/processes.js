module.exports = (sequelize, type) => {
  return sequelize.define('processes', {
    process_id: {
      type: type.STRING,
      primaryKey: true,
    },
    description: type.STRING,
  });
};
