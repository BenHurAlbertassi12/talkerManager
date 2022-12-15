const crypto = require('crypto');

function passwordGenerator() {
    return crypto.randomBytes(8).toString('hex');
}

module.exports = passwordGenerator;

// retirado do course, dia 04 / gabaritos
