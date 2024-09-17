console.log('hoge----------')
var pattern = /^https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+$/
var pattern = /^https?:\/\/[\w]+/

var postcode = 'http://W@gmail.com'
var postcode = 'hoge'
result = postcode.match(pattern);

console.log(result == null)
console.log(result.length)


