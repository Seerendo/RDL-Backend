const router = require('express').Router();
const {Process} = require('../config/config');

router.get('/', async (req, res) => {
    const process = await Process.findAll();
    res.json(process);
});

module.exports = router;