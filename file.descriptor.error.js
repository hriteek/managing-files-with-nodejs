const fs = require('fs');

console.log('Opening files...');
for (let i = 0; i < 50000; i++) {
  const fd = fs.openSync('./data/app.log');
  console.log(fd);
  // fs.closeSync(fd);
  fs.close(fd, () => {});
}

// > anytime you have a file descriptor, you are responsible for closing the file
