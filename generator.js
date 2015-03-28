var marked = require('marked'),
    fs     = require('fs');

fs.readFile('README.md', 'utf8', function (err, content) {
    if (err) throw err;
    var htmlContent = marked(content);

    fs.readFile('template.html', 'utf8', function (err, content) {
        if (err) throw err;
        fs.writeFile('index.html', content.replace(/{{ content }}/g, htmlContent));
    });
});