// Program yang menggunakan Async Await dan List

// Simulasi Async Operation menggunakan setTimeout
const AsyncOperation = (name) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Nama yang terdaftar: ${name}`);
        resolve(name);
      }, 1000); // Simulasi Async Operation selama 1 detik
    });
  };
  
  // Fungsi async utama yang menampilkan nama dalam list satu per satu
  const processList = async (list) => {
    for (const name of list) {
      await AsyncOperation(name); // Await digunakan untuk menunggu async operation selesai sebelum nama berikutnya
    }
    console.log('Semua nama tersebut telah terdaftar.');
  };
  
  // List berisi nama yang akan ditampilkan
  const nama = ['Nyoman', 'Gatot', 'Abdul', 'Paulus', 'Lim'];
  
  // Menggunakan fungsi utama
  processList(nama).catch(console.error);