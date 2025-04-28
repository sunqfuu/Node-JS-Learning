console.log(__dirname);

//fs 
const fs = require('fs')

// File PAth
const filePath = 'newFile.txt'

//File Read
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        throw err;
    } else {
        console.log('Inside of the file,', data);
    }
})