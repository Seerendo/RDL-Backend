const router = require('express').Router();
const { getUnitByParam } = require('../controllers/unit_param');

router.get('/', getUnitByParam);

module.exports = router;
