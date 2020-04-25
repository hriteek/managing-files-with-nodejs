const { convertCsv } = require('./csv.parse');
const { open, read } = require('fs');

open('./data/pulitzer-circulation-data.csv', (err, fd) => {
  // fs is file descriptor / file identifier
  const buffer = Buffer.alloc(200);
  read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
    console.table(convertCsv(buff.toString()));
  });
});
