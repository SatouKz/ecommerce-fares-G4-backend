const sequelize = require("../database/db");
const { DataTypes, Model } = require("sequelize");

// const Product = sequelize.define("product", {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   // price: {
//   //   type: DataTypes.NUMBER,
//   //   allowNull: false,
//   // },
//   stock: {
//     type: DataTypes.INTEGER,
//   },
// });

class Product extends Model {}
Product.init(
  {
    name: DataTypes.STRING,
    allowNull: false,
  },
  {
    sequelize,
    modelName: "product",
  }
);
module.exports = {
  Product,
};
