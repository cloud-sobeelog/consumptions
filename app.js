const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const consumptionHistoryRoutes = require('./routes/consumptionHistoryRoutes');

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(session({
    secret: "sobeeLogKey",
    resave: false,
    saveUninitialized: true
}));

app.use('/', consumptionHistoryRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});