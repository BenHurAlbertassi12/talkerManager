const express = require('express');

const router = express.Router();

const userMailValidate = require('../middleware/userMailValidate');

function getPassword() {
    const caracteres = '1234567890AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYxZz1234567890';
    const passwordLength = 16;
    let password = '';
    for (let i = 0; i < passwordLength; i + 1) {
        const randomNumber = Math.floor(Math.random() * caracteres.length);
        password += caracteres.substring(randomNumber, randomNumber + 1);
    }
    return password;
}

router.post('/', userMailValidate, (_req, res) => {
        try{
            res.status(200).json({ message: getPassword()})
        }
        catch {
            res.status(400).json({ message: error})
        }
    });
// });

module.exports = router;

// retirado do course gabarito do dia 04 parte 5