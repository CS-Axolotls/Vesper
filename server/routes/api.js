const path = require('path');
const express = require('express');

const fileController = require('../controllers/fileController');// TODO double check this

const router = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE
router.get('/', fileController.getCharacters, (req, res) => { // TODO change this
    res.status(200).json({ characters: res.locals.characters });// TODO change this
});

module.exports = router;
