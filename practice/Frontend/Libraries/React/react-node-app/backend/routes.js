module.exports = () => {
    const express = require('express');
    const router = express.Router();
    const Motorcycle = require('./models/motorcycles');
    const motorcycle = new Motorcycle({
        name: "Dirtbike",
        type: "dirtbike"
    });

    router.get('/health', (req, res) => {
        console.log('it worked');
        motorcycle.save();
        res.send(motorcycle);

    })

    router.get('/read', (req, res) => {
        console.log('it worked');
        res.send(motorcycle);
    })

    router.get('/write', (req, res) => {
        motorcycle.save();
        res.send(motorcycle);
    })

    return router;
}