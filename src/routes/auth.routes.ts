import { Router } from 'express';
//import { AuthController } from '../controllers/AuthController';

export const authRoutes = Router();

// const authController = new AuthController();

// authRoutes.post('/login', authController.login);
// authRoutes.post('/register', authController.register);


//teste
authRoutes.get("/", (req, res) => {
  return res.json({ message: "API running! - AUTH" });
});
