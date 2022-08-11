import nodemailer from "nodemailer";

export const sendEmail = async ({
  to,
  subject,
  body,
  template,
  attachments,
}) => {
  const callback = (err, info) => {
    if (err) {
      return err;
    }
    return info;
  };
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_USE_TLS === "true" ? true : false,
    auth: {
      user: process.env.EMAIL_HOST_USER,
      pass: process.env.EMAIL_HOST_PASSWORD,
    },
  });
  transporter.sendMail(
    {
      from: process.env.DEFAULT_FROM_EMAIL,
      to:
        process.env.NODE_ENV === "development"
          ? process.env.DEFAULT_TO_EMAIL
          : to,
      subject: subject,
      text: template ? null : body,
      html: template ? template : null,
      attachments: attachments ? attachments : null,
    },
    callback
  );
};
