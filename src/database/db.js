const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DB, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
const main = async () => {
  try {
    await sequelize.sync({ force: false });
    await sequelize.authenticate();
    console.log("aqui conexion");
  } catch (error) {
    console.log(error);
  }
};
main();

module.exports = sequelize;
