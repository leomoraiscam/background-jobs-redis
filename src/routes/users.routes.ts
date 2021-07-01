import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/', (request, response) => {
  const { name, email, password } = request.body;

  const user = {
    name,
    email,
    password
  }

  return response.json(user);
});

export default usersRouter;