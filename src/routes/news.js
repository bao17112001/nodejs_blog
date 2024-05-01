// Vào Expressjs --> API --> 4x --> router --> router.use()  để copy code

const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/news_controller');

// newsController.index
router.use('/:slug', newsController.show);

router.use('/', newsController.index);

module.exports = router;
