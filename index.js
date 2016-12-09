var fs = require('fs');

var map = {
    '(': "\uFF08",
    ')': "\uFF09",
    '"': "\uFF02",
    "'": "\uFF07",
    ";": "\u037E",
    ",": "\u002C",
    "=": "\uFF1D",
    "+": "\uFE62",
    "&": "\uFF06",
    "{": "\uFF5B",
    "}": "\uFF5D",
    "[": "\uFF3B",
    "]": "\uFF3D",
    ">": "\uFF1E",
    "<": "\uFF1C"
};

var files = process.argv.slice(2);

files.forEach(function (file) {
    var contents = fs.readFileSync(file, 'utf8');
    for(var chr in map) {
        contents = contents.replace(chr, map[chr]);
    }
    fs.writeFileSync(file, contents);
});
