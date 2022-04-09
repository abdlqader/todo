import { environment } from 'src/environments/environment';
const api_url = environment.SERVER_API;

export default {
  BASE_API: api_url,
  user: {
    login: api_url + 'user/login',
    register: api_url + 'user/register',
  },
  todo: api_url + 'todo',
};
