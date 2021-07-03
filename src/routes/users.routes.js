import { Router } from 'express';
import Queue from '../lib/Queue';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;


  const user = {
    name,
    email,
    password
  }

  await Queue.add({ user })

  return response.json(user);
});

export default usersRouter;