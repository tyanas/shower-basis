var dict = require('basis.l10n').dictionary('./ribbon/slides.l10n');
// var Node = require('basis.ui').Node;
// var Slide = basis.require('./slide.js');

module.exports = [
    {
        id: 'cover',
        coverImg: './ribbon/template/pictures/cover.jpg',
        customHeader: resource('./template/cover-header.tmpl'),
        customTmpl: resource('./template/cover.tmpl')
    },
    {
        id: 'simpleList',
        header: dict.token('simpleList.header'),
        customTmpl: resource('./template/simpleList.tmpl') // no line breaks in l10n :(
    },
    {
        id: 'text',
        header: dict.token('text.header'),
        body: dict.token('text.body')
    },
    {
        id: 'text2',
        header: dict.token('text2.header'),
        body: dict.token('text2.body')
    },
    {
        id: 'lists',
        header: dict.token('lists.header'),
        customTmpl: resource('./template/lists.tmpl')
    },
    {
        id: 'citation',
        header: dict.token('citation.header'),
        customTmpl: resource('./template/citation.tmpl')
    },
    {
        id: 'code',
        header: dict.token('code.header'),
        customTmpl: resource('./template/code.tmpl')
    },
    {
        id: 'table',
        header: dict.token('table.header'),
        customTmpl: resource('./template/table.tmpl')
    },
    {
        id: 'picture',
        header: dict.token('picture.header'),
        coverImg: './ribbon/template/pictures/picture.jpg',
        customHeader: resource('./template/picture-header.tmpl')
    },
    {
        id: 'loud',
        shout: true,
        shrink: true,
        header: dict.token('loud.header'),
    },
    {
        id: 'nav',
        header: dict.token('nav.header'),
        customTmpl: resource('./template/nav.tmpl')
    },
    {
        id: 'grid',
        header: dict.token('grid.header'),
        grid: true
    },
    {
        id: 'see-more',
        shout: true,
        customHeader: resource('./template/see-more-header.tmpl')
    }
];
