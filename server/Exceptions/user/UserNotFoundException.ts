import { BaseException } from '../BaseException';

export class UserNotFoundException extends BaseException {
  name = 'UserNotFoundException';
  message = 'Problem finding the user';
  status = 401;
  constructor() {
    super('exception');
  }
}
