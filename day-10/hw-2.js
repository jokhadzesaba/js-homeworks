class Countries {
    constructor(url) {
      if (typeof url !== 'string') {
        throw new Error('URL must be a string');
      }
  
      this.url = url;
    }
  
    send(region) {
      if (typeof region !== 'string') {
        throw new Error('Region parameter must be a string');
      }
  
      return new Promise((resolve, reject) => {
        const fullUrl = `${this.url}?region=${region}`;
  
        fetch(fullUrl)
          .then(response => {
            if (response.status === 200) {
              return response.json();
            } else {
              throw new Error(`We have error, status code: ${response.status}`);
            }
          })
          .then(data => {
            resolve(data.data);
          })
          .catch(error => {
            reject(error.message);
          });
      });
    }
  }
  
  const url = "https://api.first.org/data/v1/countries";
  const countries = new Countries(url);
  
  countries.send('africa')
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
  