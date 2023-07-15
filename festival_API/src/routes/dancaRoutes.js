const controller = require("../controller/dancaController");
const express = require("express")

const router = express.Router();

router.get("/all", controller.findAllDanca);
router.get("/:id", controller.findDancaById);
router.post("/add", controller.addNewDanca);
router.patch("/:id", controller.updateDanca);
router.delete("/:id", controller.deleteDanca);

module.exports = router;