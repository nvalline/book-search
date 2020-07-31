const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

const router = express.Router();

const db = require('../models');

const apiKey = process.env.API_KEY;
const queryUrl = "https://www.googleapis.com/books/v1/volumes?q=";
let data = {};

// Search Handle
router.get("/search/:query", async (req, res) => {
    const searchTerm = req.params.query;

    await axios.get(`${queryUrl}${searchTerm}&${apiKey}`)
        .then(res => {
            data = res.data.items;
        })
        .catch(err => console.log(err));

    res.send(data);
});

// Save Handles
router.post("/save/:id", async (req, res) => {
    const searchTerm = req.params.id;

    await axios.get(`${queryUrl}${searchTerm}&${apiKey}`)
        .then(res => {
            data = res.data.items;
        })
        .catch(err => console.log(err));

    const bookId = data[0].id;
    const bookTitle = data[0].volumeInfo.title;
    const bookImage = data[0].volumeInfo.imageLinks.thumbnail;
    const bookAuthors = data[0].volumeInfo.authors;
    const bookDescription = data[0].volumeInfo.description;
    const bookLink = data[0].volumeInfo.canonicalVolumeLink;

    db.Books.findOne({ id: bookId })
        .then(book => {
            if (book) {
                res.send({ status: "notSaved", msg: "Book already saved" })
            } else {
                db.Books.create({
                    id: bookId,
                    title: bookTitle,
                    image: bookImage,
                    authors: bookAuthors,
                    description: bookDescription,
                    link: bookLink
                }, (err, book) => {
                    if (err) throw err;
                    res.send({ status: "saved", msg: "Book saved" });
                });
            }
        })
        .catch(err => console.log(err));
});

module.exports = router;