const { convertCsv } = require('../csv.parse');
const { readFile } = require('fs');

// this is asynchronous code to read from the file using callback
module.exports.read = () => {
  readFile('./data/pulitzer-circulation-data.csv', 'utf8', (error, data) => {
    if (error) {
      console.log({ error });
      return;
    }
    const val = convertCsv(data);
    console.table(val);
  });
};
