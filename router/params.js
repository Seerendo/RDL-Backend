const router = require('express').Router();
const {Param} = require('../config/config');
const { Op } = require("sequelize");

router.get('/', async (req, res) => {
    const params = await Param.findAll();
    res.json(params);
})

router.get('/byDescription', async (req, res) => {
    const param = await Param.findAll({
        where: {
            description: {
                [Op.like]: '%'+req.body.param+'%'
            }
        }
    });
    if (param) {
        res.json(param);
    } else {
        res.send('No se encontró el dato' + req.body)
    }
})

router.get('/byField', async (req, res) => {
    const param = await Param.findAll({
        where: {
            field: {
                [Op.like]: '%'+req.body.field+'%'
            }
        }
    });
    if (param) {
        res.json(param);
    } else {
        res.send('No se encontró el dato' + req.body)
    }
})

router.get('/byFieldAndDescription', async (req, res) => {
    const param = await Param.findAll({
        where: {
            description: {
                [Op.like]: '%'+req.body.param+'%'
            },
            [Op.and] : [
                {
                    [Op.like]: '%'+req.body.field+'%'
                }
            ]
        }
    });
    if (param) {
        res.json(param);
    } else {
        res.send('No se encontró el dato' + req.body)
    }
})

module.exports = router;