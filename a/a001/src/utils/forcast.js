const request = require("postman-request");

const forcast = (callback) => {
  const api = "http://api.weatherstack.com/current";
  const access_key = "?access_key=4534b4c0d66c943670b34e593e5a0d90";
  // const query = `&query=${encodeURIComponent(latitude)},${encodeURIComponent(
  //   longitude
  // )}`;
  const query = `&query=Tokyo`;
  const url = api + access_key + query;
  console.log(url);

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to location service", undefined);
    } else if (body.error) {
      callback("unable to find location. try another search.", undefined);
    } else {
      const { temperature } = body.current;
      callback(undefined, temperature);
    }
  });
};

module.exports = forcast;
