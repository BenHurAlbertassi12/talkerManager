const express = require('express');

const router = express.Router();

// function getPassword() {
//     const caracteres = '1234567890AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYxZz1234567890';
//     let password = '';
//     const car = 16;
//     for (let i = 0; i === car; i + 1) {
//         const randomNumber = Math.floor(Math.random() * caracteres.length);
//         password += caracteres.substring(randomNumber, randomNumber + 1);
//     }
//     return getPassword('password');
// }

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