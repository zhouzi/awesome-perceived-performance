var fs = require('fs');
var marked = require('marked');
var handlebars = require('handlebars');
var entities = require('entities');

module.exports = function generator () {
    var data;
    var layout;
    var template;

    function htmlToText (str) {
        return entities.decodeHTML(str.replace(/(<([^>]+)>)/gi, ''));
    }

    function encode (str) {
        return encodeURIComponent(str);
    }

    // Some callbacks hell down there, be careful!
    fs.readFile('README.md', 'utf8', function (err, content) {
        if (err) throw err;

        data = { quotes: [] };
        var quotes = marked(content).split('<h2');
        quotes.shift();

        for (var i = 0, quote, heading, id, status; quote = quotes[i]; i++) {
            quote = '<h2' + quote;

            heading = quote.match(/(.+<\/h2>)/)[0].trim();
            id      = quote.match(/<h2\s+id="(.+)"/)[1].trim();
            status  = encode('"' + htmlToText(heading) + '" http://gabinaureche.com/reactivedesign#' + id + ' #reactivedesign');

            data.quotes.push({
                heading: heading,
                id:      id,
                status:  status,
                content: quote.match(/(<p(?:.|\s)+)/)[0].trim()
            });
        }

        fs.readFile('assets/layout.html', 'utf8', function (err, content) {
            if (err) throw err;
            layout = content;

            fs.readFile('assets/template.html', 'utf8', function (err, content) {
                if (err) throw err;
                template = handlebars.compile(content)(data);

                fs.writeFile('index.html', layout.replace(/{{ template }}/g, template));
            });
        });
    });
};