import { Errback } from "express"

const bodyparser = require("body-parser")
const cors = require("cors")
const router = require("./routes/index")
const express = require("express")
const db = require("./authentication/dbConfigs")

const app = express()

app.use(bodyparser.json({limit: "50mb"}))
app.use(bodyparser.urlencoded({extended: true,limit: "50mb"}))
app.use(cors("*"))

app.use("/",router)

db.sync().then(() => {
      app.listen(2345, () => {
            console.log("server started on port 2345")
      })
})
.catch((err: Errback)=>console.log("error: " + err))


