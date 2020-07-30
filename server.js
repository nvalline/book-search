const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3001;

// Connect DB
const MONGO_LOCAL_URI = require('./config/keys').MongoURI;

mongoose.connect(process.env.MONGODB_URI || MONGO_LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Connect Express Server
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});