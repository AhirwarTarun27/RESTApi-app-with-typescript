import dotenv from "dotenv"
dotenv.config()

export default {
      db: {
            name: process.env.DB_NAME,
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            password: process.env.DB_PASSWORD,
            dialect: process.env.DB_DIALECT,
      }
}