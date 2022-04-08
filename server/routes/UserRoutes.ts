import { Router } from 'express';
import { UserController } from '../controllers/UserController';

export const UserRoutes = Router();
const { register, login } = new UserController();
//todo body validation
UserRoutes.post('/register', register);
UserRoutes.post('/login', login);
