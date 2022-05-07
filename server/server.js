const express = require('express');
const app = express();
const policiesRoutes = require('./routes/policies');
const cors = require('cors');
const fs = require("fs");
const axios = require("axios");

app.use(cors());
app.use(express.json());

app.use('/policies', policiesRoutes)

app.listen(8080, () => {
    console.log(`🚀 We have takeoff on port 8080`)
})