const sequelize = require("../database/db");
const { DataTypes } = require("sequelize");

const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
  },
});

module.exports = {
  Product,
};

//ejemplo de un video

// class Product extends Model {}
// Product.init(
//   {
//     name: DataTypes.STRING,
//     allowNull: false,
//   },
//   {
//     sequelize,
//     modelName: "product",
//   }
// );
