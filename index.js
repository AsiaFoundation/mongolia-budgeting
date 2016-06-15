const fs = require('fs');
const csv = require('fast-csv');

var khoroos = {
};
var currentKhoroo = null;
var currentYear = '2013';

var district = 'sukhbaatar';

var csvd = fs.readFileSync(district + '.csv') + "";

csv
  .fromString(csvd.replace(/"/g, ''), { delimiter: "	" })
  .on("data", function(data){
    //console.log(data.length);
    //console.log(data);

    if (data.length === 1) {
      if (data[0] * 1 > 2000) {
        // year
        currentYear = data[0];
        khoroos[currentKhoroo][currentYear] = [];
      } else {
        currentKhoroo = data[0];
        khoroos[currentKhoroo] = {};
        currentYear = '2013';
        khoroos[currentKhoroo]['2013'] = [];
      }
    } else if (data.length === 4) {
      khoroos[currentKhoroo][currentYear].push(data);
    }
  })
  .on("end", function(){
    console.log(JSON.stringify(khoroos));
    fs.writeFile(district + '.json', JSON.stringify(khoroos), function(err) {
      console.log('done');
    });
  });
