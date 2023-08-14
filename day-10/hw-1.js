function send(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(`We have error, status code: ${response.status}`);
        }
      })
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        reject(error.message);
      });
  });
}

const url = "https://api.first.org/data/v1/countries";

send(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
