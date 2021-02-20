const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const router = require('../routes/router');

module.exports = app => {
    //Setting 

    //Setting Port
    app.set('Port', process.env.PORT || 4500);

    //Setting Handelbars
    app.set('views', path.join(__dirname, '../views'));
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname: '.hbs'
    }));
    app.set('view engine', '.hbs');

    //Middlewares
    app.use(morgan('dev'));
    app.use(methodOverride('_method'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    //Routes
    router(app);

    //Static File
    app.use(express.static(path.join(__dirname, '../public')));

    return app;
}