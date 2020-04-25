const { convertCsv } = require('../csv.parse');
const { readFileSync } = require('fs');

// this is synchronous code to read from the file using callback
module.exports.read = () => {
  try {
    const data = readFileSync('./data/pulitzer-circulation-data.csv', 'utf8');
    console.table(convertCsv(data));
  } catch (error) {
    console.error(error);
  }
};
