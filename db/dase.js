const Sequelize = require('sequelize');

try {
    module.exports = new Sequelize('sequelize_crud', 'root', 'prem@630', {
        host: "localhost",
        logging:false,
        dialect: 'mysql'
    })

} catch (err) { console.log(err); }
