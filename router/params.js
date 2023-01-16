const router = require('express').Router();
const {
  getParams,
  getParamsByDescription,
  getParamsByField,
  getParamFieldAndDescription,
  createParam,
  createMultiParams
} = require('../controllers/params.js');

router.get('/', getParams);

router.get('/byDescription', getParamsByDescription);

router.get('/byField', getParamsByField);

router.get('/byFieldAndDescription', getParamFieldAndDescription);

router.post('/', createParam);

router.post('/many', createMultiParams);

module.exports = router;
