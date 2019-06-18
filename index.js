var fs = require('fs');
var colors = require('colors');

fs.readdir('./node_modules/colors', function(err, data) {
    console.log(data);
    fs.writeFile('./readdir.txt', data, function (err) {
        if (err) throw err;
        console.log('Zapisano pobrane dane w pliku readdir.txt'.red);
    })
});