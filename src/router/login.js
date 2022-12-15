const express = require('express');

const router = express.Router();

const userMailValidate = require('../middleware/userMailValidate');
const userPasswordValidate = require('../middleware/userPasswordValidate');
const passwordGenerator = require('../middleware/passwordGenerator');

router.post('/', userMailValidate, userPasswordValidate, (_req, res) => {
    try {
        res.status(200).json({ token: passwordGenerator() });
    } catch (error) {
        res.status(400).json({ message: error });
    }
});

module.exports = router;

// retirado do course gabarito do dia 04 parte 5