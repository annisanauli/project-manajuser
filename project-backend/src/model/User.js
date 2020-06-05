const Sequelize = require('sequelize');
var sequelize = require('../config/database');
var Role = require('./Role');

//create user table
var User = sequelize.define(
    'user', 
    {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        phone: {
            type : Sequelize.BIGINT,
            zerofill : true,
        },
        roleId: {
        type: Sequelize.INTEGER,
        // This is a reference to another model
        references: {
            model: Role,
            key: 'id'
            }
        }
    },
  {
    freezeTableNama : true,
    timestamps: false,
  });
  
  User.belongsTo(Role);
  
  module.exports = User;