const nodemailer = require("nodemailer");
const config = require("./configs");
module.exports = async function emailSender(options){
console.log(options.from+" "+options.email);
const transport = nodemailer.createTransport({
  service: "gmail",
  tls: {
    rejectUnAuthorized:  false
  },
  secure: false,
  port: process.env.PORT || 2525,
  auth: {
    user: process.env.EMAIL_ID || config.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD || config.EMAIL_PASSWORD,
  },
},
);
const mailOptions = {
  to: options.to,
  subject: options.subject,
  html: options.html,
  text: options.body,
  from: options.email,
} 
  await transport.sendMail(mailOptions);
}