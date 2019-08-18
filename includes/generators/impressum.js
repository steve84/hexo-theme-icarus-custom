/**
 * About page generator
 */
module.exports = function (hexo) {
    hexo.extend.generator.register('impressum', function (locals) {
        return {
            path: 'impressum/index.html',
            layout: ['impressum', 'index'],
            data: locals
        };
    });
}
