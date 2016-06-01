basis.ready(function(){
    var Node = basis.require('basis.ui').Node;
    var dict = require('basis.l10n').dictionary('./slides.l10n');
    var l10n = basis.require('basis.l10n');

    l10n.setCultureList('en-US ru-RU');
    l10n.setCulture('ru-RU');


    new Node({
        container: document.body,
        template: resource('./template/view.tmpl'),
        childClass: {
            template: resource('./template/slide.tmpl'),
            header: null,
            shout: false,
            shrink: false,
            binding: {
                id: 'id',
                header: 'header',
                shout: 'shout',
                shrink: 'shrink',
                key: 'key'
            }
        },
        childNodes: [
            {
                shout: true,
                header: dict.token('s1.header.caption'),
                key: 's1'
            },
            {
                key: 's3'
            },
            {
                id: 'loud',
                shout: true,
                shrink: true,
                key: 'loud',
                header: dict.token('loud.header.caption'),
            }
        ]
    });
});
