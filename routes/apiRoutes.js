const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

const router = express.Router();

const { Books } = require('../models/Books');

// Search Handle
router.get("/search/:query", async (req, res) => {
    console.log("REQ:", req.params.query)
    const apiKey = process.env.API_KEY;
    const queryUrl = "https://www.googleapis.com/books/v1/volumes?q=";
    const searchTerm = req.params.query;
    let data = {};

    await axios.get(`${queryUrl}${searchTerm}&${apiKey}`)
        .then(res => {
            data = res.data.items;
        })
        .catch(err => console.log(err));

    res.send(data);
})

module.exports = router;