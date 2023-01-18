module.exports = (sequelize, type) => {
    return sequelize.define('specs', {
        spec_id: {
        type: type.STRING,
        primaryKey: true,
        },
        description: type.STRING,
    });
    };
  