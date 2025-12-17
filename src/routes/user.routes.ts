import { Router } from 'express';
import { CreateUserController } from '../controllers/user/CreateUserController';
import { AuthUserController } from '../controllers/user/AuthUserController';

export const userRoutes = Router();

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();

userRoutes.post('/create', createUserController.handle);
userRoutes.post('/login', authUserController.handle);
