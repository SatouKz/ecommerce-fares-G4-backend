const express = require("express");
const morgan = require("morgan");
const app = express();
const sequelize = require("./database/db");
const Product = require("./models/products");

// app.use(morgan("dev"));

// app.listen(3000);
// console.log("server on port 3000");

//Setting
const PORT = process.env.PORT || 3000;

//rutas
app.get("/", (req, res) => {
  Product.create({
    name: "PC GAMER",
  }).then((Product) => {
    res.json(Product);
  });
});

//Arrancamos el servidor
app.listen(PORT, () => {
  console.log(`la app ha arranado en http://${PORT}`);

  //conectase a la base de datos
  //Force true : DROP TABLES
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("nos hemos conectados a la base de datos :D");
    })
    .catch((Error) => {
      console.log("se ha producido un error unu", Error);
    });
});
