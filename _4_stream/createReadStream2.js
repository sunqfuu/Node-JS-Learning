console.log(__dirname);

//Stream
const fs = require('fs');

// Okunacak Dosya 
const fileName = "./hllw.webp"

// CreateStream
const readStream = fs.createReadStream(fileName);

// Sum
let sum = 0;


//Veri Okuma Olayları
readStream.on('data', (value) => {
    value.length
    console.log(`Okunan Veri: ${value.length}`)
    sum += value.length
})

//Veri Tamamlandıktan Sonra
readStream.on('end', () => {
    console.log('Veri okuma tamamlandı.');
    console.log(`Okunan Toplam Veri: ${sum} byte`)
})

// Close
readStream.on('close', () => {
    console.log('Veri okuma kapatıldı.')
})

// Hata
readStream.on('error', (err) => {
    console.error(`Hata: ${err}`)
})