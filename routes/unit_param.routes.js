const router = require("express").Router();

const { UnitParamController } = require("../controllers");

router.get("/", UnitParamController.getUnitByParam);

module.exports = router;
