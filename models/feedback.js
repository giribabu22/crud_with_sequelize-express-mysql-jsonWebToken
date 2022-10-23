const connection_to_database = require('../db/dase');
const {Sequelize, DataTypes} = require('sequelize');

module.exports = connection_to_database.define("feedback",{
    feeling:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
        freezeTableName:true
    })