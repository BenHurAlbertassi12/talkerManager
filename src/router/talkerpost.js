const express = require('express');

const router = express.Router();

const { fieldAge } = require('../validator/fieldAge');
const { fieldName } = require('../validator/fieldName');
const { fieldRate } = require('../validator/fieldRate');
const { fieldTalk } = require('../validator/fieldTalk');

module.exports = router;