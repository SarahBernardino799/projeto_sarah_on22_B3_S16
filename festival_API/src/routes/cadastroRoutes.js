const controller = require("../controller/cadastroController");
const express = require("express");

const router = express.Router();

router.get("/all", controller.findAllCadastro);
router.post("/add", controller.addNewCadastro);
router.delete("/:id", controller.deleteCadastro);
router.post("/login", controller.login);

module.exports = router