const slugify = require('slugify');

module.exports.getSlugFromPath = (path) => slugify(path.replace(/^.*[\\\/]/, '').replace('.md', ''), { lower: true });

module.exports.getTitleFromSlug = (slug) => slug.split('-').map((word) => {
    return word[0].toUpperCase() + word.substring(1);
}).join(" ");

module.exports.paginate = (array, size, number) => {
    return array.slice((number - 1) * size, number * size);
}

