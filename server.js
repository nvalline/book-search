const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

// Connect DB
mongoose.connect(process.env.MONGODB_URI || process.env.MONGO_LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(console.log('MongoDB connected'))
    .catch(err => console.log(err));

// API Routes
app.use('/api', apiRoutes);

// Connect Express Server
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});