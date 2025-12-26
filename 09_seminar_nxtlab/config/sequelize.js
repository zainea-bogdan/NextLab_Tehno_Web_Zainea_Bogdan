const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./sqlite/test.db",
});

sequelize.sync().then(() => {
  console.log("sync fully");
});

module.exports = sequelize;
