import { Dialect } from "sequelize/types";
import config from "./config"

const sequelize_module = require("sequelize")



const sequelize = new sequelize_module(config.db.name as string, config.db.user as string, config.db.password, {
      dialect: config.db.dialect as Dialect,
      host: config.db.host,
})

// const db = new sequelize_module("user_database", "postgres", "pgsql@143", {
//   dialect: "postgres",
//   host: "localhost",
// })

sequelize.authenticate()
.then(() => {
  console.log('Database connected...');
})
.catch((err:any) => {
  console.log('Error: ' + err);
});

// export const initConnection = async () => {
//       try {
//             await sequelize.authenticate()
//             console.log("connected to postgres db")
//       } catch (error) {
//             console.log("connection to postgres db failed")
//             throw error;
//       }
// }

// initConnection()


module.exports = sequelize