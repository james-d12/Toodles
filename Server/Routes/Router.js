const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');

router.get('/', async (req, res) => {
    res.render('home')
});

module.exports = router