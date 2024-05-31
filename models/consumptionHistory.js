const { db } = require("../db");

exports.getConsumptionHistory = async (data, dataType) => {
    let sql = `SELECT ch.cHistoryID cHistoryID, ch.userID userID, ch.date date , ch.amount amount, ch.content content, ch.category category, 
    FROM consumptionHistory ch WHERE ${dataType}=${data}`;
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