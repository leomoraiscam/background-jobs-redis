import { Router } from 'express';
import Mail from '../lib/Mail'

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;


  const user = {
    name,
    email,
    password
  }

  await Mail.sendMail({
    from: 'Queue Test <queue@test.com.br>',
    to: `${name} ${email}`,
    subject: 'Teste de filas',
    html: `Olá, ${name}, bem-vindo ao sistema de filas`
  })

  return response.json(user);
});

export default usersRouter;