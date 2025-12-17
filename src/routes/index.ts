import { Router } from 'express';

import { userRoutes } from './user.routes';
import { projectRoutes } from './project.routes';
import { messageRoutes } from './message.routes';

export const routes = Router();

routes.use('/user', userRoutes);
routes.use('/project', projectRoutes);
routes.use('/message', messageRoutes);
