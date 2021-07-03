import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'Queue Test <queue@test.com.br>',
      to: `${user.name} ${user.email}`,
      subject: 'Teste de filas',
      html: `Olá, ${user.name}, bem-vindo ao sistema de filas`
    })
  }
}