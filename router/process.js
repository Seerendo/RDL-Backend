const router = require('express').Router();
const { getProcess } = require('../controllers/process');

router.get('/', getProcess);

module.exports = router;
