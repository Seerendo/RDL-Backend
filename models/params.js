module.exports = (sequelize, type) => {
  return sequelize.define('params', {
    id_param: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: type.STRING,
    cuali: {
      type: type.ENUM,
      values: ['false', 'true'],
      defaultValue: 'false',
    },
    active: {
      type: type.ENUM,
      values: ['false', 'true'],
      defaultValue: 'false',
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
