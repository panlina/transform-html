var transform = require('.');
var html = "<div>a</div>";
var cssx = 'div{"text":"b","before":"b"}';
console.log(html);
var html = transform(cssx)(html);
console.log(html);
