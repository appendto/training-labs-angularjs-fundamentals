var path = require('path');
var express = require('express');
var app = express();
var reservations = require('./routes/reservations').reservations;
var items = require('./routes/menuItems').items;
var sequelize = require('./db/context');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// Models
require('./db/models/reservation');
require('./db/models/menuItem');

sequelize
    .sync({ force: true })
    .complete(function(err) {
        if (!!err) {
            console.log('Unable to connect to the database:', err)
        }
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../app')));

app.get('/', function (req, res) {
    res.render('index');
});

app.use('/api/reservations', reservations);
app.use('/api/items', items);

app.listen(3000);

console.log("Express app started on port 3000...");