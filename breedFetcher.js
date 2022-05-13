const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.log('Error Message: ', error);
      callback(error, null);
      return;
    }
    if (!error) {
      const data = JSON.parse(body);
      if (!data[0]) {
        callback('Breed Not Found', null);
        return;
      }
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
