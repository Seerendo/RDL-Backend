const router = require('express').Router();
const {
  createUnitsParams,
  getUnitsParams,
} = require('../controllers/units_params');

router.get('/', getUnitsParams);

router.post('/', createUnitsParams);

module.exports = router;
