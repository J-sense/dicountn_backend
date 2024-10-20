import express from "express"
import userController from "./user.controller.js";


const router = express.Router();
router.get("/users", userController.getall)
router.post("/users", userController.signup)
router.post("/users/login", userController.login)
router.delete("/users/:id", userController.delateOne)
const userRoutes = router;
export default userRoutes;