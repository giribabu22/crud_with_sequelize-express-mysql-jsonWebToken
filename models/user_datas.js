const connection_to_database = require('../db/dase');
const { sequelize, DataTypes } = require('sequelize');

module.exports = connection_to_database.define('user_data', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    phone_no: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true
});