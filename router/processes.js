const router = require('express').Router();
const { getProcess } = require('../controllers/processes');

router.get('/', getProcess);

module.exports = router;
