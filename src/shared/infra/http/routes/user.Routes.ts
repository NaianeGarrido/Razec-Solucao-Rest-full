import { CreateUserController } from "../../../../modules/Users/useCases/CreateUser/CreateUserController";
import { Router } from "express";
import { GetUserController } from "../../../../modules/Users/useCases/CreateUser/GetUserController";
import { UpdateUserController } from "../../../../modules/Users/useCases/CreateUser/UpdateUserController";
import { DeleteUserController } from "../../../../modules/Users/useCases/CreateUser/DeleteUserController";
import { GetUserByIdController } from "../../../../modules/Users/useCases/CreateUser/GetUserByIdController";
import { ensureAdmin } from "../middleware/ensureAdmin";
import { ensureAuthenticated } from "../middleware/ensureAuthenticate";

const UserRoutes = Router();
const createUserController = new CreateUserController();
const getUsersControllers = new GetUserController();
const updateUserControllers = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const getUserByIdController = new GetUserByIdController();

UserRoutes.post("/", createUserController.handle);
UserRoutes.get("/",ensureAuthenticated, ensureAdmin, getUsersControllers.handle);
UserRoutes.put("/:id",ensureAuthenticated, ensureAdmin, updateUserControllers.handle);
UserRoutes.delete("/:id",ensureAuthenticated, ensureAdmin, deleteUserController.handle);
UserRoutes.get("/:id",ensureAuthenticated, ensureAdmin, getUserByIdController.handle);

export default UserRoutes;