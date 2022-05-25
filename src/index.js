const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

// This will be our application entry. We'll setup our server here.
const http = require("http");

// Set up the express app
const app = express();

// Log requests to the console.
app.use(morgan("dev"));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome bro uwu jsndjsbdj.",
  })
);

//rutas

// app.use(categoryRoutes);
// app.use(productRoutes);

// const categoryRoutes = require("./src/routes/category.routes");
// const productRoutes = require("./src/routes/products.routes");

// app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = parseInt(process.env.PORT, 10) || 8000;
app.set("port", port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;
