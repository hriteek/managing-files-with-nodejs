const { writeFile } = require('fs');

writeFile(
  './data/app/log',
  '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /dot-com" 405 21512',
  { flag: 'a' },
  (err) => {
    err ? console.error(err) : console.log('Filed modified');
  }
);
