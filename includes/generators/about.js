/**
 * About page generator
 */
module.exports = function (hexo) {
    hexo.extend.generator.register('about', function (locals) {
        return {
            path: 'about/index.html',
            layout: ['about', 'index'],
            data: locals
        };
    });
}
