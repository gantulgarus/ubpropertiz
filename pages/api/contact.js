import nodemailer from "nodemailer";

export default async (req, res) => {
  //   const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: req.body.email,
      to: "tady_mon@yahoo.com",
      subject: `Contact form submission from ${req.body.name}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${req.body.email}</p><br>
        <p><strong>Message: </strong> ${req.body.message}</p><br>
      `,
    });
  } catch (error) {
    console.log("error to send email", error.message);
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};
