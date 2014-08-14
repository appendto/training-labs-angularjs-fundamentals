var Sequelize = require('Sequelize'),
    sequelize = require('../context');

var Reservation = sequelize.define('Reservation', {
    name: Sequelize.STRING,
    qty: Sequelize.STRING,
    time: Sequelize.DATE
});

module.exports = Reservation;