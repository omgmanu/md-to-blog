const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const { getSlugFromPath, getTitleFromSlug } = require('./appService');

const { Container } = require('typedi');

const generateByPath = async (path) => {
    try {
        const text = await readFile(path, 'utf8');
        const html = Container.get('converter').makeHtml(text);
        const slug = getSlugFromPath(path);
        const title = getTitleFromSlug(slug);

        Container.get('cache').set(slug, { html, title });

        Container.get('logger').info(`📝️ Post generated: ${title}`);
    } catch (err) {
        Container.get('logger').error(`🔥 Error on generating post from file ${path}: %o`, err);
    }

}

const removeByPath = (path) => {
    try {
        const slug = getSlugFromPath(path);

        Container.get('cache').del(slug);
        Container.get('logger').info(`❌ Post deleted: ${getTitleFromSlug(slug)}`);
    } catch (err) {
        Container.get('logger').error(`🔥 Error on removing post from cache: %o`, err);
    }
}

module.exports.generateByPath = generateByPath;
module.exports.removeByPath = removeByPath;
