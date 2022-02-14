import { AuthenticateUserController } from "../../../../modules/Users/useCases/Authenticate/AuthenticateUserController";
import { Router } from "express";

const AuthenticateRoutes = Router();
const authenticateUser = new AuthenticateUserController();

AuthenticateRoutes.post("/", authenticateUser.handle);

export default AuthenticateRoutes;