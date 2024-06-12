const fs = require('fs-extra');
const path = require('path');

const source = path.join(__dirname, 'components', 'CVResume.pdf');
const destination = path.join(__dirname, 'public', 'CVResume.pdf');

fs.copy(source, destination, (err) => {
  if (err) {
    console.error('Error copying file:', err);
  } else {
    console.log('File copied successfully!');
  }
});
