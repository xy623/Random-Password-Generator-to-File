var generator = require('generate-password');
var fs = require('fs');

var password_result, i = 0;
var pwLength = 6;
var pwAmount = 50;

function password() {
    password_result = generator.generate({
        length: pwLength,
        numbers: true,
        symbols: true
    });
}

function writeFile() {
    password();
    fs.appendFile('pw.txt', password_result + "\n", function (err) {
        if (err) {
            console.log(err);
        } else
            console.log("password saved");
    });
}

while (i < pwAmount) {
    writeFile();
    i++;
};
