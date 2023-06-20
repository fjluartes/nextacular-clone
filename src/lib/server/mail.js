import nodemailer from 'nodemailer';

export const emailConfig = {
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
  service: process.env.EMAIL_SERVICE,
};

const transporter = nodemailer.createTransport(emailConfig);

export const sendMail = async ({ from, html, subject, text, to }) => {
  const data = {
    from: from ?? process.env.EMAIL_FROM,
    to,
    subject,
    text,
    html,
  };

  process.env.NODE_ENV === 'production'
    ? await transporter.sendMail(data)
    : console.log(data);
  // if (process.env.NODE_ENV === 'development') {
  //   console.log(data);
  // }
  // await transporter.sendMail(data);
};

export default transporter;
