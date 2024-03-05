// Contoh penggunaan Axios dalam JavaScript untuk melakukan POST request:

// Dalam contoh ini, kita akan membuat sebuah post request ke jsonplaceholder API
const axios = require('axios');

// Data yang akan dikirim dalam body request
const postData = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

axios.post('https://jsonplaceholder.typicode.com/posts', postData)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });