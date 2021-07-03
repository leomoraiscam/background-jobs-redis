
import nodemailer from 'nodemailer';

export default nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  secure: false,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASSWORD,
  }
});


