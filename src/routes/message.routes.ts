import { Router } from 'express';
//import { MessageController } from '../controllers/MessageController';

export const messageRoutes = Router();

// const messageController = new MessageController();

//teste
messageRoutes.get("/", (req, res) => {
  return res.json({ message: "API running! - MESSAGE" });
});
