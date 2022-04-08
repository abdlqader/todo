import { NextFunction, Request, Response } from 'express';

export class UserController {
  constructor() {}
  register = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).send('register');
  };
  login = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).send('login');
  };
}
