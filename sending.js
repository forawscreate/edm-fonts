const fs = require('fs')
const path = require('path')
const nodemailer = require("nodemailer");

const html = fs.readFileSync(path.resolve(__dirname, 'email.html'), 'utf8')
const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587, //smtp port
    auth: {
      user: 'ins.irst@outlook.com', //email address
      pass: 'xxxxx', //password
    },
  });
transporter.sendMail({
    from: 'ins.irst@outlook.com',
    to: "ins.irst@outlook.com, k.isnrst@gmail.com",
    subject: "EDM",
    html: html,
});