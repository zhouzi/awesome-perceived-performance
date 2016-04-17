var marked = require('marked');
var jade = require('jade');

var fs = require('fs');
var tpl = fs.readFileSync('index.jade', 'utf8');
var markdownContent = fs.readFileSync('README.md', 'utf8');
var content = marked(markdownContent);

fs.writeFile('index.html', jade.compile(tpl)({ content: content }), console.log.bind(console));
