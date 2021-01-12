const _ = require('lodash');
const { metaData, indexPageLimit } = require('../../config').constants;
const { paginate, getTitleFromSlug } = require('../../services/appService');

const { Container } = require('typedi');

function routes(routerObject) {

    routerObject.route('/')
        .get(async (req, res) => {
            const latestPosts = paginate(Container.get('cache').keys(), 4 , 1).map(post => {
                return { slug: post, title : getTitleFromSlug(post)}
            });

            return res.render('home', {
                latestPosts,
                metaData
            });
        });

    routerObject.route('/blog')
        .get((req, res) => {
            const page = req.query.page ?? 1;
            const posts = paginate(Container.get('cache').keys(), indexPageLimit , page).map(post => {
                return { slug: post, title : getTitleFromSlug(post)}
            });

            res.render('blog-index', {
                posts,
                metaData: _.extend({}, metaData, {
                    title: 'Blog',
                    description: 'Blog posts index',
                    url: `${metaData.siteUrl}/blog`
                }),
                pagination: {
                    page,
                    hasNext: Container.get('cache').keys().length > indexPageLimit * page,
                    hasPrev: page > 1
                }
            })
        });

    routerObject.route('/about')
        .get(async (req, res) => {

            return res.render('about', {
                metaData: _.extend({}, metaData, {
                    title: 'About',
                    description: 'About this project',
                    url: `${metaData.siteUrl}/about`
                }),
            });
        });


    return routerObject;
}

module.exports = routes;
