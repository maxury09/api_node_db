const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('api_node_db_oh1p', 'node_db_user', 'fO24QxMOgCNoOicpIFag2nYlYXVYj0W1', {
host: 'dpg-crvpk823esus73950p20-a',
dialect: 'postgres',
});

module.exports = sequelize;