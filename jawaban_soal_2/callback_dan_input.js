// Program yang menggunakan callback function dan menerima input user

// Impor module yang diperlukan
const fs = require('fs');
const readline = require('readline');

// Membuka antarmuka program CLI
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Input nama file yang akan dibacakan
rl.question("Masukkan nama file (beserta ekstensinya) yang mau dibacakan: ", function(fileName) {
    // Membaca file yang diinput menggunakan callback function
    fs.readFile(fileName, 'utf8', function(err, data) {
        if (err) {
            console.error("Terjadi kesalahan dalam membaca file", err);
        } else {
            console.log("Teks dalam file", fileName, ": \n", data);
        }

        // Menutup antarmuka program
        rl.close();
    });
});

// Event ini dipanggil ketika dipanggil setelah antarmuka ditutup
rl.on('close', function() {
  process.exit(0);
});