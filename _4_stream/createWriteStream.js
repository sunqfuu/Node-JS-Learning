console.log(__dirname);

// FileSystem
const fs = require('fs');

// FileName
const fileName = "silksongReleaseDate.txt"
const writeStream = fs.createWriteStream(fileName);

// Write Stream
writeStream.write("there is no release date 🤡");
writeStream.end();

//Finish
writeStream.on('finish', () => {
    console.log('Release Date Completed.');
});

//Error
writeStream.on('error', (err) => {
    console.error(`Silksong is Cancelled: ${err}`);
});

