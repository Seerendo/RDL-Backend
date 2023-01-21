const ProcessModel = (sequelize, type) => {
  return sequelize.define('processes', {
    process_id: {
      type: type.STRING,
      primaryKey: true,
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

module.exports = ProcessModel;