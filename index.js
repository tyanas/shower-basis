var Slides = basis.require('./slides.js');
var config = basis.require('./mrt/config.js');
// var config = basis.require('./ribbon/config.js');
// var config = basis.require('./ribbon2/config.js');
var l10n = basis.require('basis.l10n');

l10n.setCultureList('en-US ru-RU');
// l10n.setCulture('en-US');
l10n.setCulture('ru-RU');

require('./mrt/template/user.css').startUse();

basis.ready(function(){
    setTimeout(function(){
        var slides = new Slides({
            slidesSrc: './mrt/slides.json',
            l10nSrc: './mrt/slides.l10n'
        });
    }, 10);
});
