const breed = process.argv.slice(2);
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('Error Message: ', error);
    return;
  }
  if (!error) {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Breed Not Found');
      return;
    }
    //console.log('Data: ', data);
    console.log('description: ', data[0].description);
  }
});

