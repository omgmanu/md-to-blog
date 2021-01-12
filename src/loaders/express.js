const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../routing');
const path = require('path');

module.exports = ({ app }) => {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views'));

    app.enable('trust proxy');

    app.use(cors());

    app.use(bodyParser.json());

    app.use(express.static(path.join(__dirname, '../public')));
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/', routes());

    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });

    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
            },
        });
    });
};
