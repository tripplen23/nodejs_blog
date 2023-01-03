const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

// Cấu hình public path
app.use(express.static(path.join(__dirname, 'public')));

// Apply middleware (Thanh phan trung gian)

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

// HTTP Logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');

// Cấu hình resources/views
app.set('views', path.join(__dirname, 'resources', 'views'));

// Home, search, contact

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
