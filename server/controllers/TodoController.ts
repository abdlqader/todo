import { NextFunction, Response } from 'express';
import { AuthRequest } from '../Interfaces/AuthRequestInterface';

export class TodoController {
  constructor() {}
  //todo JWT Auth
  createTodo = async (req: AuthRequest, res: Response, next: NextFunction) => {
    return res.status(200).send('createTodo');
  };
  updateTodo = async (req: AuthRequest, res: Response, next: NextFunction) => {
    return res.status(200).send('updateTodo');
  };
  deleteTodo = async (req: AuthRequest, res: Response, next: NextFunction) => {
    return res.status(200).send('deleteTodo');
  };
  fetchAll = async (req: AuthRequest, res: Response, next: NextFunction) => {
    return res.status(200).send('fetchAllTodos');
  };
}
