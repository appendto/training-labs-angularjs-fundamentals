var Sequelize = require('sequelize'), 
    sequelize = new Sequelize('db', 'pizza-place', 'pizzapassword', {
        dialect: 'sqlite',
        storage: 'db.sqlite'
    });

module.exports = sequelize;