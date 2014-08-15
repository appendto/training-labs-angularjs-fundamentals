var Sequelize = require('Sequelize'),
    sequelize = require('../context');

var MenuItem = sequelize.define('MenuItem', {
    name: Sequelize.STRING,
    price: Sequelize.DECIMAL,
    description: Sequelize.STRING
});

module.exports = MenuItem;