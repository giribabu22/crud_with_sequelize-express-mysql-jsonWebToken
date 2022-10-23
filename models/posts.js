const connection_to_database = require('../db/dase');
const { sequelize, DataTypes } = require('sequelize')

module.exports = connection_to_database.define('posts', {
    post_title: {
        type: DataTypes.STRING,
    },
    post_message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    likes: {
        type: DataTypes.INTEGER,
    }
    //, dislikes: {
    //     type: DataTypes.INTEGER,
    // }
}, {
    freezeTableName: true
})