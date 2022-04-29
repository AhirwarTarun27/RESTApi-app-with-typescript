import { Router } from "express";

const router = Router()
const UserRouter = require("./userRoute")

router.use("/user", UserRouter)

module.exports = router;