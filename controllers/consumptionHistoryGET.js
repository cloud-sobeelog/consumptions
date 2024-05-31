const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");
const util = require("../lib/util");
const consumptionHistory = require("../models/consumptionHistory");
const express = require('express');
const router = express.Router();

function dateFormat(date) {
    return date.getFullYear() + "-" + ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1).toString() : "0" + (date.getMonth() + 1)) + "-" + (date.getDate() > 9 ? date.getDate().toString() : "0" + date.getDate().toString());
}

router.get('/getConsumptionHistory/cHistoryID', async (req, res)=> {
    try{
        const {cHistoryID} = req.params;
        const result = await consumptionHistory.getConsumptionHistory('cHistoryID',cHistoryID);
        const newResult = result[0];
        newResult.date = dateFormat(newResult.date);

        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_CONSUMPTION_ID_SUCCESS, newResult));
    }
    catch(err){
        console.log(err);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    }
})

router.get('/getConsumptionHistory/date', async (req, res)=> {
    try{
        const {date, userID} = req.body;
        const result = await consumptionHistory.getConsumptionHistoryByDate(date, userID);
        const newResult = result[0];
        newResult.date = dateFormat(newResult.date);

        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_CONSUMPTION_ID_SUCCESS, newResult));
    }
    catch(err){
        console.log(err);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    }
})

router.get('/getConsumptionHistory/userID', async (req, res)=> {
    try{
        const {userID} = req.params;
        const result = await consumptionHistory.getConsumptionHistory('userID', userID);
        const newResult = result[0];
        newResult.date = dateFormat(newResult.date);

        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_CONSUMPTION_ID_SUCCESS, newResult));
    }
    catch(err){
        console.log(err);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    }
})

router.get('/getConsumptionHistory/month', async (req, res)=> {
    try{
        const {month, userID} = req.params;
        const result = await consumptionHistory.getConsumptionHistoryByMonth(month, userID);
        const newResult = result[0];
        newResult.date = dateFormat(newResult.date);

        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_CONSUMPTION_ID_SUCCESS, newResult));
    }
    catch(err){
        console.log(err);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    }
})

router.get('/getTotalConsumptionAmount', async (req, res)=> {
    try{
        const {userID} = req.params;
        const result = await consumptionHistory.getTotalConsumptionAmount(userID);
        const newResult = result[0];
        newResult.date = dateFormat(newResult.date);

        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_CONSUMPTION_ID_SUCCESS, newResult));
    }
    catch(err){
        console.log(err);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    }
})

module.exports = router;