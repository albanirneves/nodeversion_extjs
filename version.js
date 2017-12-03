'use strict';

const fs = require('fs');
let version = process.argv[2];
let jsonFilePath = process.argv[3];

fs.readFile(jsonFilePath, (err, data) => {
    let json = data.toString('utf8');
    let arrayVersion = [];
    let result;

    //remove comments
    json = json.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '');
    json = JSON.parse(json);

    if(json.version) {
        arrayVersion = json.version.split('.');
    }

    if(json.sencha && json.sencha.version)  {
        arrayVersion = json.sencha.version.split('.');
    }

    arrayVersion[0] = arrayVersion[0] || 0;
    arrayVersion[1] = arrayVersion[1] || 0;
    arrayVersion[2] = arrayVersion[2] || 0;
    arrayVersion[3] = arrayVersion[3] || 0;

    if(version == '--major'){
        arrayVersion[0]++;
        arrayVersion[1] = arrayVersion[2] = arrayVersion[3] = 0;

    } else if(version == '--minor'){
        arrayVersion[1]++;
        arrayVersion[2] = arrayVersion[3] = 0;

    } else if(version == '--patch'){
        arrayVersion[2]++;
        arrayVersion[3] = 0;

    } else if(version == '--build'){
        arrayVersion[3]++;
    }

    result = arrayVersion.join('.');

    if(json.version) {
        json.version = result;
    }

    if(json.sencha && json.sencha.version)  {
        json.sencha.version = result;
    }

    json = JSON.stringify(json, null, 4);

    fs.writeFile(jsonFilePath, json, 'utf-8', function (err) {
      if (err) throw err;
      console.log(`Version updated to ${result} on ${jsonFilePath}`);
    });
});
