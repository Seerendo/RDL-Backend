const router = require('express').Router();
const {
  getParams,
  getParamsByDescription,
  getParamsByField,
  getParamFieldAndDescription,
  createParam
} = require('../controllers/params.js');

router.get('/', getParams);

router.get('/byDescription', getParamsByDescription);

router.get('/byField', getParamsByField);

router.get('/byFieldAndDescription', getParamFieldAndDescription);

router.post('/', createParam)

module.exports = router;
