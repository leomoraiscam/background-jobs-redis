import nodemailer, { Transporter } from 'nodemailer';

interface IMailContact {
  name: string;
  email: string;
}

interface ISendMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
}

class EtherealMailProvider {
  private transporter: Transporter;
  
  constructor() {
    this.transporter = nodemailer.createTransport({
     host: 'smtp.mailtrap.io',
     port: 2525,
     secure: false,
     auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASSWORD,
     }
    });
  }

  async sendMail({
    to,
    subject,
    from,
  }: ISendMailDTO): Promise<void> {
    await this.transporter.sendMail({
      from: {
        name: from?.name || 'Queue Test',
        address: from?.email || 'equipe@queue.com.br',
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: `Olá ${to?.name}, bem-vindo ao sistema de filas`,
    });
  }
}

export default EtherealMailProvider;
