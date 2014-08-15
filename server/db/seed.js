var MenuItem = require('./models/menuItem');

function seed() {
    return MenuItem.bulkCreate(require('./fixtures/menuItems.json').map(function(i) {
        return {
            name: i.name,
            description: i.description,
            price: i.price
        }
    }));
}



module.exports = function() {
    return seed();
};