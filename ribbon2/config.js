var dict = require('basis.l10n').dictionary('./ribbon2/slides.l10n');

var slides0 = [
    'slideHeader',
    'inlineElements',
    'quotes',
    'nestedLists',
    'blockLists',
    'mixedBullets',
    'paragraphColumns',
    'listColumns',

    'simpleTable',
    'stripedTable',

    // 'plainCodeListing', // TODO
    'numberedCodeListing',
    'highlightedCodeLines',
    'hiddenCodeSteps',
    'highlightedCodeSteps',

    'gridSlide',
    'whiteSlide',
    'blackSlide',

    'shout',
    'multilineShout',
    'linkedShout',
    'growingShout',
    'shrinkingShout',

    // pisture exact tall wide TODO
    // 'timer',
    'listNavigation'
];
var slides = {};

// missing python#zip
slides0.forEach(function(key) {
    slides[key] = {
        id: key,
        header: dict.token(key).token('header'),
        customTmpl: resource('./template/' + key + '.tmpl')
    };
});

// customize certain slides

// shower/node_modules/shower-ribbon $ cat index.html |grep h2|sed -e 's/<h2[^>]*>\(.*\)<\/h2>/"\1": {"header": "\1"},/g'
//  cat slides.l10n | grep "\": {"| sed -e 's/"\(.*\)": {/"\1",/'

slides.inlineElements.customTmpl = null;
slides.inlineElements.body = dict.token('inlineElements.body');
slides.inlineElements.comments = dict.token('inlineElements.comments');

slides.paragraphColumns.customTmpl = null;
slides.paragraphColumns.body = dict.token('paragraphColumns.body');

slides.gridSlide.customTmpl = null;
slides.gridSlide.grid = true;

slides.whiteSlide.customTmpl = null;
slides.whiteSlide.white = true;

slides.blackSlide.customTmpl = null;
slides.blackSlide.black = true;

slides.shout.customTmpl = null;
slides.shout.shout = true;

slides.multilineShout.customTmpl = null;
slides.multilineShout.shout = true;

slides.linkedShout.customTmpl = null;
slides.linkedShout.shout = true;

slides.growingShout.customTmpl = null;
slides.growingShout.shout = true;
slides.growingShout.grow = true;

slides.shrinkingShout.customTmpl = null;
slides.shrinkingShout.shout = true;
slides.shrinkingShout.shrink = true;

// slides.paragraphColumns.customTmpl = resource('./template/listNavigation.tmpl');

module.exports = Object.keys(slides).map(function(key) {
    return slides[key];
});
