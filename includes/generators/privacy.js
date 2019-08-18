/**
 * Privacy page generator
 */
module.exports = function (hexo) {
    hexo.extend.generator.register('privacy', function (locals) {
        return {
            path: 'privacy/index.html',
            layout: ['privacy', 'index'],
            data: locals
        };
    });
}
