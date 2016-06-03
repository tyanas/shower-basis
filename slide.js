var Node = basis.require('basis.ui').Node;
var templates = basis.require('basis.template').define('app', {
    slide: resource('./template/slide.tmpl')
});

module.exports = Node.subclass({
    template: templates.slide,
    customTmpl: null,
    customHeader: null,
    showHeader: true,
    header: null,
    body: '',
    coverImg: null,
    shout: false,
    white: false,
    black: false,
    shrink: false,
    grow: false,
    grid: false,
    binding: {
        id: 'id',
        header: 'header',
        showHeader: 'showHeader',
        body: 'body',
        coverImg: 'coverImg',
        shout: 'shout',
        grow: 'grow',
        shrink: 'shrink',
        grid: 'grid',
        white: 'white',
        black: 'black',
        key: 'key',
        customHeader: 'satellite:',
        custom: 'satellite:',
        comments: 'comments'
    },
    init: function() {
        Node.prototype.init.call(this);
        console.log(this.customTmpl);
        if (this.customTmpl) {
            this.setSatellite('custom', new Node({
                template: this.customTmpl
            }));
        }
        if (this.customHeader) {
            this.header = '';
            this.setSatellite('customHeader', new Node({
                template: this.customHeader
            }));
        }
    }
});
