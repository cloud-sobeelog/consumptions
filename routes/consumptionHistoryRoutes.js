const express = require('express');
const consumptionHistoryGET = require('../controllers/consumptionHistoryGET');
const consumptionHistoryPOST = require('../controllers/consumptionHistoryPOST');
const router = express.Router();

router.get('/getConsumptionHistory/date', consumptionHistoryGET);
router.get('/getConsumptionHistory/month', consumptionHistoryGET);
router.get('/getConsumptionHistory/userID', consumptionHistoryGET);
router.get('/getConsumptionHistory/cHistoryID', consumptionHistoryGET);
router.get('/getTotalConsumptionAmount', consumptionHistoryGET)
router.post('/', consumptionHistoryPOST);

module.exports = router;