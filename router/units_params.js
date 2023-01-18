const router = require('express').Router();
const { createUnitsParams } = require('../controllers/units_params');

router.post('/', createUnitsParams);

module.exports = router;
