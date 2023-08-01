const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
const apiRouter = require("./routes/index");
const db = require("./models");

app
  .use(express.json({ limit: "50mb" }))
  .use(express.urlencoded({ extended: true, limit: "50mb" }))
  .use(cors());

app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("Empezando");

  db.sequelize
    .authenticate()
    .then(() => {
      console.log("Nos hemos conectado a la base de datos");
    })
    .catch((error) => {
      console.log("Se ha producido un error", error);
    });
});
