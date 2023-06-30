const router = require("express").Router();

const {
  getParams,
  getParamsByDescription,
  getParamsByField,
  getParamByFieldAndDescription,
  createParam,
  createMultiParams,
  updateParam,
} = require("../controllers/param.controller");

router.get("/", getParams);

router.get("/byDescription", getParamsByDescription);

router.get("/byField", getParamsByField);

router.get("/byFieldAndDescription", getParamByFieldAndDescription);

router.post("/", createParam);

router.post("/many", createMultiParams);

router.put("/", updateParam);

module.exports = router;
