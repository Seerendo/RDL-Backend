const router = require("express").Router();
const {
  getUnits,
  getUnitByDescription,
  createUnit,
  createMultiUnits,
} = require("../controllers/unit.controller");

router.get("/", getUnits);

router.get("/byDescription", getUnitByDescription);

router.post("/", createUnit);

router.post("/many", createMultiUnits);

module.exports = router;
