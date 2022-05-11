const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));

const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const categoryRoutes = require("./src/routes/category.routes");
const productRoutes = require("./src/routes/products.routes");

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use(categoryRoutes);
app.use(productRoutes);

app.listen(3000, () => console.log("Server corriendo"));

// Tutorial del video

// //Arrancamos el servidor
// app.listen(PORT, () => {
//   console.log(`la app ha arranado en http://${PORT}`);

//   //conectase a la base de datos
//   //Force true : DROP TABLES
//   sequelize
//     .sync({ force: false })
//     .then(() => {
//       console.log("nos hemos conectados a la base de datos :D");
//     })
//     .catch((Error) => {
//       console.log("se ha producido un error unu", Error);
//     });
// });
