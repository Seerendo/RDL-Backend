module.exports = (sequelize, type) => {
  return sequelize.define('users', {
    user_id: {
      type: type.STRING,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: type.STRING,
      allowNull: false,
    },
    lastName: {
      type: type.STRING,
      allowNull: false,
    },
    email: {
      type: type.STRING,
      allowNull: false,
      unique: true,
      isEmail: true,
    },
    password: {
      type: type.STRING,
      allowNull: false,
    },
  });
};
