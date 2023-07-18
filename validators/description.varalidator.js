const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper");

const validateCreate = [
  check("description").exists().not().isEmpty(),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreate };
