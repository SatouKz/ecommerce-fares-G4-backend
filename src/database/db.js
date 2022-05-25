const { Sequelize } = require("sequelize");
const pg = require("pg");

const sequelize = new Sequelize(process.env.DB, {
  dialectModule: pg,
});
const main = async () => {
  try {
    await sequelize.sync({ force: false });
    await sequelize.authenticate();
    console.log("Conexion establecida");
  } catch (error) {
    console.log(error);
  }
};
main();

module.exports = sequelize;
