console.log(__dirname);

//File Delete
const fs = require('fs');

//
const filePath = 'yenidosya.txt'

fs.unlink(filePath, (err) => {
    if (err) {
        console.error('Error deleting file:', err)
        throw err;
    } else {
        console.log(filePath + ' File deleted successfully.');
    }
})