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
    shrink: false,
    grid: false,
    binding: {
        id: 'id',
        header: 'header',
        showHeader: 'showHeader',
        body: 'body',
        coverImg: 'coverImg',
        shout: 'shout',
        shrink: 'shrink',
        grid: 'grid',
        key: 'key',
        customHeader: 'satellite:',
        custom: 'satellite:'
    },
    init: function() {
        Node.prototype.init.call(this);
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
