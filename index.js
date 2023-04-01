const nodemailer = require("nodemailer");
const config = require("./configs");
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   tls: {
//     rejectUnAuthorized:  false
//   },
//   secure: false,
//   port: 2525,
//   auth: {
//     user: config.EMAIL_ID,
//     pass: config.EMAIL_PASSWORD,
//   },
// },
// {
//     from: "nitin.akshatbisht@gmail.com",
// }
// );
// const mailOptions = {
//   to: "ak.collegework@gmail.com",
//   subject: "Hello! akshat",
//   text: "my query is this",
// }
// transporter.sendMail(mailOptions, function(err, data) {
//   if (err) {
//     console.log("Error " + err);
//   } else {
    
//   }
// });
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
 