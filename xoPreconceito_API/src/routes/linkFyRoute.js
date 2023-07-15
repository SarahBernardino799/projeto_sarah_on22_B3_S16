const controller = require("../controller/linkFyController");
const express = require("express")

const router = express.Router();

router.get("/all", controller.findAll);
router.get("/:id", controller.findById);
router.post("/add", controller.addNew);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;