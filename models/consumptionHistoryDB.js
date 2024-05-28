const { db } = require("../db");

exports.getConsumptionHistory = async (cHistoryID) => {
    let sql = `SELECT ch.cHistoryID cHistoryID, ch.userID userID, ch.date date , ch.amount amount, ch.content content, ch.category category, u.nickname nickname 
    FROM consumptionHistory ch, user u 
    WHERE cHistoryID=${cHistoryID} && ch.userID = u.userID`;
    let [rows, fields] = await db.query(sql);
    console.log(rows);
    return rows;
};

exports.postConsumptionHistory = async (userID, date, content, amount, category, secret) => {
    let sql = `
        INSERT INTO consumptionHistory 
        (userID, date, content, amount, category, secret) 
        VALUES
        (?, ?, ?, ?, ?, ?)`;
    let values = [userID, date, content, amount, category, secret];
    let [rows] = await db.query(sql, values);
    console.log(rows); // When posting, rows will contain the insertId, which might be useful for displaying the just-inserted content
};