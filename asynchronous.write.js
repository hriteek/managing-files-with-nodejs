const { writeFile } = require('fs');

writeFile(
  './data/app.log',
  '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /dot-com" 405 21512',
  { flag: 'wx' }, // the wx flag through an error if the file already exists
  (err) => {
    err ? console.error(err) : console.log('Filed modified');
  }
);

// ? options
// 1. File Fags
// r => Read Mode
// w => Write Mode
// a => Append Mode

// 2. Extended Flags
// x => Exclusive
// + => Multiple Mode
// S => Synchronous

// > Read options
// r, r+, rs+

// > Write options
// w, wx, w+, wx+

// > Append options
// a, ax, a+, ax+, as, as+
