basis.ready(function(){
    var Node = basis.require('basis.ui').Node;
    var Slide = basis.require('./slide.js');
    var config = basis.require('./ribbon/config.js');
    var l10n = basis.require('basis.l10n');

    l10n.setCultureList('en-US ru-RU');
    l10n.setCulture('en-US');

    new Node({
        container: document.body,
        template: resource('./template/view.tmpl'),
        showProgressBar: true,
        binding: {
            showProgressBar: 'showProgressBar'
        },
        childClass: Slide,
        childNodes: config
    });
});
