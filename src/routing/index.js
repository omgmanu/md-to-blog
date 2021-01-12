const { Router } = require('express');
const _ = require('lodash');
const { metaData } = require('../config').constants;
const blogRouter = require('./routes/blogRouter');
const pageRouter = require('./routes/pageRouter');

module.exports = () => {
    const appRouter = Router();

    pageRouter(appRouter);
    blogRouter(appRouter);

    appRouter.route('*')
        .get((req, res) => {
            res.status(404).render('404', {
                metaData: _.extend({}, metaData, { title: 'Page not found 😦 - 404' })
            });
        });

    return appRouter;
}
