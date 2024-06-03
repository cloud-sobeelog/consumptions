const express = require('express');
const router = express.Router();
const consumptionHistoryGET = require('../../controllers/consumptionHistoryGET');
const consumptionHistoryPOST = require('../../controllers/consumptionHistoryPOST');
const dateConsumptionGET = require('../../controllers/dateConsumptionGET');
const monthlyConsumptionGET = require('../../controllers/monthlyConsumptionGET');
const userConsumptionGET = require('../../controllers/userConsumptionGET')
const totalConsumptionAmountGET = require('../../controllers/totalConsumptionAmountGET')

router.get('/:cHistoryID', consumptionHistoryGET)
router.post('/', consumptionHistoryPOST);
router.get('/month/:month/:userID',monthlyConsumptionGET);
router.get('/date/:date/:userID',dateConsumptionGET);
router.get('/user/:userID', userConsumptionGET)
router.get('/amount/:date/:userID',totalConsumptionAmountGET);

module.exports = router;