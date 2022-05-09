const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get('/', (req,res) => {
    fs.readFile('./data/faq-test-data.json', 'utf8', (err, data) => {
        if(err) throw err;

        const faqs = JSON.parse(data);
        //res.json(policies)
        fs.readFile('./data/articles-test-data.json', 'utf8', (err, data) => {
            if(err) throw err;
            const articles = JSON.parse(data);

            res.json({
                faqs: faqs,
                articles: articles
            })
        })
    }
    )
})

module.exports = router;