console.log(__dirname);

// Stream
const fs = require('fs');

//Read Stream
const fileName = "./hllw.webp"

//ReadStream
const readStream = fs.createReadStream(fileName);

//WriteStream
const writeStream = fs.createWriteStream('hllw2.webp')

// On Read Stream
readStream.on('data', (chunk) => {
    console.log(`Okunan Veri: ${chunk}`)
});

//Pipe Transfer
readStream.pipe(writeStream);

//Veri Okuma Tamamlandı
readStream.on('end', () => {
    console.log('Veri okuma tamamlandı.');
})

// Hata
readStream.on('error', (err) => {
    console.error(`Hata: ${err}`)
})