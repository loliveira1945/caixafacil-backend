import { Router } from 'express';

import { authRoutes } from './auth.routes';
import { projectRoutes } from './project.routes';
import { messageRoutes } from './message.routes';

export const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/project', projectRoutes);
routes.use('/message', messageRoutes);
