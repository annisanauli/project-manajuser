var Sequelize = require('sequelize');
//database configuration
const sequelize = new Sequelize(
  'manajuser_db',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.sync({});

module.exports = sequelize;