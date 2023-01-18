const customHeader = require('../middlewares/custom_header');
const router = require('express').Router();
const { createSpec } = require('../controllers/specs');

router.get('/login', (req, res) => {
  console.log('Login');
});

router.post('/register', customHeader, createSpec);

module.exports = router;
