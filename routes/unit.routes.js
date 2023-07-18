const router = require("express").Router();
const { UnitController } = require("../controllers");
const { validateCreate } = require("../validators/description.varalidator");

router.get("/", UnitController.getUnits);

router.get("/byDescription", UnitController.getUnitByDescription);

router.post("/", validateCreate, UnitController.createUnit);

router.post("/many", UnitController.createMultiUnits);

module.exports = router;
