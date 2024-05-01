// Vào Expressjs --> API --> 4x --> router --> router.use()  để copy code

const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/site_controller');

// site_controller.index
router.use('/search', siteController.search);

router.use('/', siteController.index);

module.exports = router;
