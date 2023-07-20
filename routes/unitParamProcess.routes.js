const router = require("express").Router();

const { UnitParamProcessController } = require("../controllers");

router.get("/", UnitParamProcessController.getUnitByParam);

module.exports = router;
