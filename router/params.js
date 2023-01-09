const router = require('express').Router();
const {Param} = require('../config/config');

router.get('/', async (req, res) => {
    const params = await Param.findAll();
    res.json(params);
})

module.exports = router;