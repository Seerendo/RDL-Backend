module.exports = (sequelize, type) => {
  return sequelize.define('params', {
    param_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: type.STRING,
      allowNull: false,
    },
    cuali: {
      type: type.BOOLEAN,
      defaultValue: false,
    },
    active: {
      type: type.BOOLEAN,
      defaultValue: false,
    },
    field: {
      type: type.ENUM,
      values: [
        'FISICO & QUIMICO',
        'CONTAMINANTE',
        'INSTRUMENTAL',
        'MICROBIOLOGICO',
        'FUNCIONAL',
        'POR DEFINIR',
      ],
      defaultValue: 'POR DEFINIR',
    },
  });
};
