const { metaData } = require('../../config').constants;
const _ = require('lodash');
const { Container } = require('typedi');

function routes(routerObject) {

    routerObject.route('/blog/:postSlug')
        .get((req, res, next) => {
            const postContent = Container.get('cache').get(req.params.postSlug);

            if (!postContent) {
                return next();
            }

            res.render('blog-single', {
                postContent,
                metaData: _.extend({}, metaData, {
                    title: postContent.title,
                    url: `${metaData.url}/blog/${req.params.postSlug}`
                })
            });
        });

    return routerObject;
}

module.exports = routes;
