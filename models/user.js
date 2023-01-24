const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class User extends Model {}
User.init(
  {
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
  },
  {
    sequelize,
    modelName: 'user',
  }
);

module.exports = User;
