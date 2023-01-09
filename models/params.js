module.exports = (sequelize, type) => {
    return sequelize.define('params', {
        id_param: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: type.STRING,
        cuali: type.STRING,
        active: type.STRING,
        field: type.STRING
    })
}