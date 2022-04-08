import {
  comparePassword,
  hashPassword,
  signToken,
} from '../helpers/AuthHelper';
import {
  LoginBodyInterface,
  RegisterBodyInterface,
} from '../Interfaces/UserAuthInterfaces';
import { createUser, findUser } from '../repository/UserRepository';

export const login = async (body: LoginBodyInterface): Promise<string> => {
  try {
    const { email, password } = body;
    const user = await findUser({ email: email });
    if (!user) throw 'TODO: ERROR WRONG EMAIL OR PASSWROD EXCEPTION';
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) throw 'TODO: ERROR WRONG EMAIL OR PASSWROD EXCEPTION';
    const token = signToken(user.ID);
    return token;
  } catch (error) {
    throw error;
  }
};
export const register = async (
  body: RegisterBodyInterface
): Promise<string> => {
  try {
    const { email, password, name } = body;
    const hashedPassword = await hashPassword(password);
    const createdUser = await createUser({ ...body, password: hashedPassword });
    if (!createdUser) throw 'TODO: ERROR EMAIL ALREADY EXISTS';
    const token = signToken(createdUser.ID);
    return token;
  } catch (error) {
    throw error;
  }
};
