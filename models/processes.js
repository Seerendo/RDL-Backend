module.exports = (sequelize, type) => {
    return sequelize.define('processes', {
        id_process: {
            type: type.STRING,
            primaryKey: true
        },
        description: type.STRING,
    })
}