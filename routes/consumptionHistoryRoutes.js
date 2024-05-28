const express = require('express');
const consumptionHistoryGET = require('../controllers/consumptionHistoryGET');
const consumptionHistoryPOST = require('../controllers/consumptionHistoryPOST');
const router = express.Router();

router.get('/:cHistoryID', consumptionHistoryGET);
router.post('/', consumptionHistoryPOST);

module.exports = router;