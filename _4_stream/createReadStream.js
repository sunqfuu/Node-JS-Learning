console.log(__dirname);

// Stream
const fs = require('fs');

//Read Stream
const fileName = "./hllw.webp"

//CreateStream
const readStream = fs.createReadStream(fileName);

// On Read Stream
readStream.on('data', (chunk) => {
    console.log(`Okunan Veri: ${chunk}`)
});

//Veri Okuma Tamamlandı
readStream.on('end', () => {
    console.log('Veri okuma tamamlandı.');
})

// Hata

readStream.on('error', (err) => {
    console.error (`Hata: ${err}`)
})