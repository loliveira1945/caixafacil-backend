import { Router } from 'express';
//import { ProjectController } from '../controllers/ProjectController';

export const projectRoutes = Router();

// const projectController = new ProjectController();

//teste
projectRoutes.get("/", (req, res) => {
  return res.json({ message: "API running! - PROJECT" });
});
