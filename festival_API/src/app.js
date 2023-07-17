require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect();

const dancaRoutes = require("./routes/dancaRoutes");
const cadastroRoutes = require("./routes/cadastroRoutes");

app.use("/festival/dancas",dancaRoutes);
app.use("/festival/cadastro", cadastroRoutes);
const swaggerUi = require("swagger-ui-express")
const swaggerFile = require("../swagger/swagger_output.json")
app.use("/minha-rota-de-documentacao", swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app;