module.exports = (sequelize, type) => {
  return sequelize.define('specs', {
    spec_id: {
      type: type.STRING,
      primaryKey: true,
    },
    description: {
      type: type.STRING,
      allowNull: false,
    },
    status: {
      type: type.ENUM,
      values: ['VIGENTE', 'DESARROLLO', 'EN REVISION', 'HISTORICO'],
      defaultValue: 'DESARROLLO',
    },
    spec_type: {
      type: type.ENUM,
      values: [
        'ESPEC. ALIMENTOS',
        'ESPEC. HCP',
        'ESPEC. EMPAQUE',
        'SIN ESPECIFICACION',
      ],
      defaultValue: 'SIN ESPECIFICACION',
    },
    user_id: {
      type: type.STRING,
      allowNull: false,
    },
  });
};
