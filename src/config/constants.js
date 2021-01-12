require('dotenv').config();

const { SITE_URL } = process.env;

const INDEX_PAGE_LIMIT = 3;

const DIST_PUBLIC_URL = `${SITE_URL}/assets`;

const METADATA = {
    siteTitle: 'WIP Blog - Simple markdown to html blog',
    title: 'WIP Blog',
    description: 'Simple markdown to html blog',
    keywords: 'blog, md to html',
    siteUrl: SITE_URL,
    url: SITE_URL,
    stylesheetUrl: `${DIST_PUBLIC_URL}/bundle.css`,
    scriptUrl: `${DIST_PUBLIC_URL}/bundle.js`
};

module.exports = {
    siteUrl: SITE_URL,
    metaData: METADATA,
    indexPageLimit: INDEX_PAGE_LIMIT
}
