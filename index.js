var Node = basis.require('basis.ui').Node;
var Slide = basis.require('./slide.js');
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
        var slides = new Node({
            container: document.body,
            template: resource('./template/view.tmpl'),
            showProgressBar: true,
            binding: {
                showProgressBar: 'showProgressBar'
            },
            childClass: Slide,
            childNodes: config.value
        });
        config.attach(function(value) {
            slides.setChildNodes(value);
        })
    }, 10);
});
