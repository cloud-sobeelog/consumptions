const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");
const util = require("../lib/util");
const { consumptionHistoryDB } = require("../models");

function dateFormat(date) {
    return date.getFullYear() + "-" + ((date.getMonth() + 1) > 9 ?
    (date.getMonth() + 1).toString() : "0" + (date.getMonth() +1))
    + "-" + (date.getDate() > 9 ? date.getDate().toString() : "0"
    + date.getDate().toString());
}

module.exports = async (req, res) => {
    try {
        const { userID } = req.params;

        let result = await consumptionHistoryDB.getConsumptionHistoryByUserID(userID);
        async function asyncForEach(result) {
            for (let index = 0; index < result.length; index++) {
                result[index].date = dateFormat(result[index].date);
            }
            return result;
        }

        const data = await asyncForEach(result);
        return res.status(statusCode.OK).send(util.success
            (statusCode.OK, responseMessage.READ_CONSUMPTION_USERID_SUCCESS, {
                userID: userID,
                result: result
            }));
    }

    catch(err) {
        console.log(err)
    }
}