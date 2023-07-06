const router = require("express").Router();
const { UnitController } = require("../controllers");

router.get("/", UnitController.getUnits);

router.get("/byDescription", UnitController.getUnitByDescription);

router.post("/", UnitController.createUnit);

router.post("/many", UnitController.createMultiUnits);

module.exports = router;
