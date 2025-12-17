import { Router } from 'express';
import { CreateUserController } from '../controllers/user/CreateUserController';
import { LoginUserController } from '../controllers/user/LoginUserController';

export const userRoutes = Router();

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();

userRoutes.post('/create', createUserController.handle);
userRoutes.post('/login', loginUserController.handle);
