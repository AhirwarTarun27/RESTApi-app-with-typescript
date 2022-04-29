import {  Request, Response, Router } from "express";
import { TodoInstance } from "../model/userModel";
import TodoValidator from "../validator/user.validator"
import Middleware  from "../middleware/handleValidation"
import handleValidation from "../middleware/handleValidation";

const UserRouter = Router()
// const {addUser} = require("../dao/userDao")

UserRouter.route("/todo_list").get(TodoValidator.checkReadTodo(),handleValidation.handleValidationError,async (req: Request, res: Response) => {
      try {
            const  limit = req.query?.limit as number | undefined;
            const offset = req.query?.offset as number | undefined;
      const record = await TodoInstance.findAll({where:{},limit,offset})
      return res.status(200).send({record})
 } catch (error:any) {
       throw error
 }
})

UserRouter.route("/todo_list/:id").get(async (req: Request, res: Response) => {
      try {
            const {id} = req.params;
            const record = await TodoInstance.findOne({ where: { id } })
            res.status(400).send({record})
 } catch (error:any) {
       throw error
 }
})

UserRouter.route("/create").post(TodoValidator.checkCreateTodo(), Middleware.handleValidationError,async (req: Request, res: Response) => {
      try {
            console.log(req.body)
            const record = await TodoInstance.create({...req.body})
            // const record = await addUser(req.body)
            return res.status(200).send({record})
      } catch (error) {
            throw error;
      }
})


module.exports = UserRouter;