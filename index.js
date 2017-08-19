var cheerio = require('cheerio');
var cssx = require('cssx');
function transform(_cssx) {
	return function (html) {
		var $ = cheerio.load(html, { xmlMode: true });
		_cssx = cssx.parse(_cssx);
		var elementrule = cssx(_cssx)($($._root));
		for (var id in elementrule)
			apply(elementrule[id].style, $(elementrule[id].element));
		return $.html();
	}
}
function apply(style, element) {
	for (var name in style) {
		var value = style[name];
		switch (name) {
			case 'text':
				element.text(value);
				break;
			case 'before':
				element.before(value);
				break;
		}
	}
}
module.exports = transform;
