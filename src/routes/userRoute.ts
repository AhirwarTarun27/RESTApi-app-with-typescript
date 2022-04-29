import { Request, Response, Router } from "express";


// console.log(TodoInstance)
// import { v4 as uuidv4 } from "uuid";

import { TodoInstance } from "../model/userModel";
const UserRouter = Router()
// const {addUser} = require("../dao/userDao")

UserRouter.route("/").get(async (req: Request, res: Response) => {
      return res.send("hello world")
})

UserRouter.route("/create").post(async (req: Request, res: Response) => {
      try {
            console.log(req.body)
            const record = await TodoInstance.create({...req.body})
            return res.json({record,msg: "Successfully create todo"})
      } catch (error) {
            throw error;
      }
})


module.exports = UserRouter;