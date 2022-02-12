const http = require("http");

const result = {};

const getPromise = () =>
  new Promise((resolve, reject) => {
    http.get("http://codingtest.brique.kr:8080/random", function (res) {
      var responseString = "";
      res.on("data", function (data) {
        responseString += data;
      });
      res.on("end", function () {
        resolve(responseString);
      });
      res.on("error", function (error) {
        reject(error);
      });
    });
  });

const getQuotes = async () => {
  for (let i = 0; i < 100; i++) {
    const data = await getPromise();
    result[data] = result[data] ? result[data] + 1 : 1;
  }
  const sortedKeys = Object.keys(result).sort((a, b) => result[b] - result[a]);
  let totalCount = 0;
  sortedKeys.forEach((key) => {
    console.log(`count: ${result[key]} ${key}`);
    totalCount += result[key];
  });

  console.log(`\n\nTotal count: ${totalCount}`);
};

getQuotes();