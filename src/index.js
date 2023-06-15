const express = require("express");
const app = express();
const axios = require("axios").create({
  baseUrl: "http://api.bolig.work:50005/api/",
});

//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.get("/allasset", (req, res) => {
  axios({
    url: "allasset",
    method: "get",
  })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      if (!error.response) {
        // network error
        this.errorStatus = "Error: Network Error";
      } else {
        this.errorStatus = error.response.data.message;
      }
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
