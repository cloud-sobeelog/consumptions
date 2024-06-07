const { db } = require("./db");

//cHistoryID로 데이터를 찾아오는 모델
const getConsumptionHistory = async(cHistoryID) => {
    let sql = `SELECT cHistoryID, userID, date, amount, content, category
    FROM consumptionHistory
    WHERE cHistoryID=${cHistoryID}`;
    let [rows,fields] = await db.query(sql);
    console.log(rows);
    return rows
};

//month는 yyyy-mm 형식으로 입력
const getConsumptionHistoryByMonth = async(month, userID) => {
    let sql =
    `SELECT DISTINCT date
    From consumptionHistory
    WHERE date LIKE '${month}%' AND userID = ${userID}`;
    let [rows,fields] = await db.query(sql);
    console.log(rows);
    return rows
};

//date는 yyyy-mm-dd 형식으로 입력
const getConsumptionHistoryByDate = async(userID, date) => {
    let sql =
    `SELECT cHistoryID, userID, amount, content, category, date
    FROM consumptionHistory
    WHERE userID = ${userID} AND date = '${date}'`;
    let [rows, fields] = await db.query(sql);
    return rows;
};

const getConsumptionHistoryByUserID = async(userID, requestingUserID) => {
    let sql;
    if(userID==requestingUserID){
    sql =
    `SELECT cHistoryID, userID, amount, content, category, date
    FROM consumptionHistory
    WHERE userID = ${userID}`;}
    else{
    sql =
    `SELECT cHistoryID, userID, amount, content, category, date
    FROM consumptionHistory
    WHERE userID = ${userID} and secret = 0`};
    let [rows, fields] = await db.query(sql);
    return rows;
    
};

//date는 yyyy-mm-dd 형식으로 입력
const getTotalConsumptionAmount = async(userID, date) => {
    let sql = `SELECT SUM(amount)
    FROM consumptionHistory
    WHERE userID = ${userID} AND date = '${date}'`
    let [rows, fields] = await db.query(sql);
    return rows;
}

const postConsumptionHistory = async(userID, date, content, amount, category, secret) => {
    let sql = `
        INSERT INTO consumptionHistory
        (userID, date, content, amount, category, secret)
        VALUES
        (${userID}, '${date}', '${content}', ${amount}, '${category}', ${secret})
    `
    let [rows] = await db.query(sql);
    console.log(rows); // post시 rows를 찍어보면 입력된 insertId가 나옴, 방금 입력한 내용을 띄울 필요가 있을 떄 사용하면 좋을 듯
}

module.exports = {
    getConsumptionHistory,
    getConsumptionHistoryByMonth,
    getConsumptionHistoryByDate,
    getConsumptionHistoryByUserID,
    getTotalConsumptionAmount,
    postConsumptionHistory,
}