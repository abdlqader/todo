import { Router } from 'express';
import { TodoController } from '../controllers/TodoController';
import { isLoggedIn } from '../middleware/isLoggedIn';

export const TodoRoutes = Router();
const { createTodo, deleteTodo, updateTodo, fetchAll } = new TodoController();
TodoRoutes.post('', isLoggedIn, createTodo);
TodoRoutes.delete('', isLoggedIn, deleteTodo);
TodoRoutes.put('', isLoggedIn, updateTodo);
TodoRoutes.get('', isLoggedIn, fetchAll);
