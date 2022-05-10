const express = require("express");
const app = express();
const policiesRoutes = require("./routes/policies");
const cors = require("cors");
const fs = require("fs");
const axios = require("axios");

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use("/policies", policiesRoutes);

app.get("/resources", (req, res) => {
  fs.readFile("./data/resources-test-data.json", "utf8", (err, data) => {
    if (err) throw err;

    const resources = JSON.parse(data);
    res.json(resources);
  });
});

app.get("/resources/:category", (req, res) => {
  //console.log(req.params.category)
  let category = req.params.category
  fs.readFile("./data/resources-test-data.json", "utf8", (err, data) => {
    if (err) throw err;
    const resources = JSON.parse(data);
    const resourceIndex = resources.findIndex(resource => {
      return resource.category === category}
  );
    res.json(resources[resourceIndex]);
  });
});

app.get("/resources/:category/:topic", (req, res) => {
  //console.log(req.params.topic)
  let category = req.params.category
  let topic = req.params.topic
  fs.readFile("./data/resources-test-data.json", "utf8", (err, data) => {
    if (err) throw err;
    const resources = JSON.parse(data);
    const resourceIndex = resources.findIndex(resource => {
      return resource.category === category}
  );

    const plolicyIndex = resources[resourceIndex].policies.findIndex( policy => {
      return policy.policyTopic === topic
    })
    //console.log(resources[resourceIndex].policies[plolicyIndex])
    res.json(resources[resourceIndex].policies[plolicyIndex]);
  });
});

app.listen(8080, () => {
  console.log(`🚀 We have takeoff on port 8080`);
});
