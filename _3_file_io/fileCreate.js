// Direction
console.log(__dirname);

//fs : File System 
const fs = require('fs');

//File Path and Format
const filePath = 'newFile.txt'

const fileContent = 'Hello, Node.js!';

// Write File
fs.writeFile(filePath, fileContent, 'utf-8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully.');
    }
})