const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
mongoose.set('strictQuery', false);

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION;


const routes = require('./routes');
app.use('/', routes());

const start = async () => {
    try{
        await mongoose.connect(CONNECTION);
    } catch(err) {
        console.log(`ERROR: ${ err.message }`);
    }

    app.listen(PORT, () => {
        console.log(`App listening on ${ PORT }`);
    });
};

start();