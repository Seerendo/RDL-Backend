const router = require('express').Router();
const {
  getUnits,
  getUnitByDescription,
  createUnit,
} = require('../controllers/units.js');

router.get('/', getUnits);

router.get('/byDescription', getUnitByDescription);

router.post('/', createUnit);

module.exports = router;
