var Node = basis.require('basis.ui').Node;
var Slide = basis.require('./slide.js');

function slidesToData(slides, data, dict) {
    data.set(slides.map(function(slide) {
        if (typeof slide === 'string') {
            slide = {
                id: slide,
                header: dict.token(slide).token('header')
            }
        } else {
            if (!slide.header) {
                slide.header = dict.token(slide.id).token('header');
            }
            // if (slide.customTmpl) {
            //     slide.setSatellite('custom', resource(slide.customTmpl));
            // }
            if (slide.template) {
                slide.template = resource(slide.template);
            }
        }
        return slide;
    }));
}

module.exports = Node.subclass({
    container: document.body,
    template: resource('./template/view.tmpl'),
    showProgressBar: true,
    l10nSrc: null,
    slidesSrc: null,
    binding: {
        showProgressBar: 'showProgressBar'
    },
    childClass: Slide,
    init: function() {
        Node.prototype.init.call(this);

        if (!this.l10nSrc || !this.slidesSrc) {
            return;
        }

        var data = new basis.Token();
        var dict = require('basis.l10n').dictionary(this.l10nSrc);

        resource(this.slidesSrc).ready(function(slides) {
            slidesToData(slides, data, dict);
        }).fetch();

        this.setChildNodes(data.value);
        data.attach(function(value) {
            this.setChildNodes(value);
        });
    }
});
