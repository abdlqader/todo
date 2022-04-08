import { Router } from 'express';
import { TodoController } from '../controllers/TodoController';

export const TodoRoutes = Router();
const { createTodo, deleteTodo, updateTodo, fetchAll } = new TodoController();
//todo authentication, body validation
TodoRoutes.post('', createTodo);
TodoRoutes.delete('', deleteTodo);
TodoRoutes.put('', updateTodo);
TodoRoutes.get('', fetchAll);
