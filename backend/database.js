
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB, '', '', {
    host: 'localhost',
    dialect: 'mysql' //mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

module.exports = sequelize