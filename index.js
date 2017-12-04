var cheerio = require('cheerio');
var cssx = require('cssx');
function transform(_cssx) {
	return function (html, options, isDocument) {
		var $ = cheerio.load(html, options, isDocument);
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
		element[name](value);
	}
}
module.exports = transform;
