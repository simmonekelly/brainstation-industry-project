const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get('/', (req,res) => {
    fs.readFile('./data/faq-test-data.json', 'utf8', (err, data) => {
        if(err) throw err;

        const policies = JSON.parse(data);
        res.json(policies)
    }
    )
})

module.exports = router;