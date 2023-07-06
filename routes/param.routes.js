const router = require("express").Router();

const { ParamController } = require("../controllers");

router.get("/", ParamController.getParams);

router.get("/byDescription", ParamController.getParamsByDescription);

router.get("/byField", ParamController.getParamsByField);

router.get("/byFieldAndDescription", ParamController.getParamByFieldAndDescription);

router.post("/", ParamController.createParam);

router.post("/many", ParamController.createMultiParams);

router.put("/", ParamController.updateParam);

module.exports = router;
