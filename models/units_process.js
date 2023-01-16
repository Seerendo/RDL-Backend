module.exports = (sequelize, type) => {
    return sequelize.define('units_params', {
        active: {
            type: type.ENUM,
            values: ['false', 'true'],
            defaultValue: 'true',
        },
    });
};