const express = require('express');
const router = express.Router();

router.use('/consumptions',require('./consumptionHistory'));
module.exports = router;