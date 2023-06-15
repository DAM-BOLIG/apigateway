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

app.get("/asset", (req, res) => {
  axios({
    req: "AssetID",
    url: "allasset/:AssetID",
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

app.get("/asset_info", (req, res) => {
  axios({
    url: "asset_info",
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

app.get("/allcategory", (req, res) => {
  axios({
    url: "allcategory",
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

app.get("/allbrand", (req, res) => {
  axios({
    url: "allbrand",
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

app.get("/allcolor", (req, res) => {
  axios({
    url: "allcolor",
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
