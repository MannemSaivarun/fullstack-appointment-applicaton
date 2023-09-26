const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  phonenumber: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    unique: true

  }
  
  
});


module.exports = User;
