import { Router } from 'express';
import EtherealMailProvider from '../lib/Mail'

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const etherealMailProvider = new EtherealMailProvider()

  const user = {
    name,
    email,
    password
  }

  await etherealMailProvider.sendMail({
    to: {
      name: user.name,
      email: user.email,
    },
    subject: 'Teste de filas',
  })

  return response.json(user);
});

export default usersRouter;