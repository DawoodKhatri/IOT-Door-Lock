const nodemailer = require("nodemailer");

const getTemplate = (name, email, subject, message) => {
  return `
  <div>
  <p>From: ${name}</p>
  <p>Email: ${email}</p>
  <p>Subject: ${subject}</p>
  <p>${message}</p>
</div>
`;
};

export default function SendMail(req, res) {
  const from = "Door Lock System";
  const subject = "Incorrect Password Attempt";
  const message = "An incorrect password attempt was made to open door.";

  const options = {
    from: `${from} <dk.appmailservice@gmail.com>`,
    to: "dawoodkhatri18@gmail.com",
    subject: subject,
    text: message
  };
  let transpoter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dk.appmailservice@gmail.com",
      pass: "zehqwquqxbzpykyu",
    },
  });
  transpoter.sendMail(options).then((e) => {
    res.status(200);
    res.json({ result: "success" });
  });
}
