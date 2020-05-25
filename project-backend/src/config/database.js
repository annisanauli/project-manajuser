var Sequelize = require('sequelize');
//database configurationa
const sequelize = new Sequelize(
  'node',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.sync({});
module.exports = sequelize;