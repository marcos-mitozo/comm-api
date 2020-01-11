'use strict';

const express = require('express');
const router = express.Router();
const listController = require('../controllers/list-controller');

router.get('/', listController.get);

module.exports = router;