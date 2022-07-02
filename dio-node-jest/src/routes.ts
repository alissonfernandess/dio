import { UserController } from "./controllers/userController";
import { Router } from "express";

const routes = Router();

const userController = new UserController();

routes.get('/users', userController.listarUsuario);
routes.post('/users', userController.criarUsuario);

export { routes };