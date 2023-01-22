const router = require('express').Router();
const {
  getUnits,
  getUnitByDescription,
  createUnit,
} = require('../controllers/unit');

router.get('/', getUnits);

router.get('/byDescription', getUnitByDescription);

router.post('/', createUnit);

module.exports = router;
