import { Router } from "express";
import AuthController from "../../controllers/auth";
const authRouter = Router();

authRouter.get("/", AuthController.getAllUser);
authRouter.post("/register", AuthController.register);
authRouter.post("/login", AuthController.login);

export default authRouter;
