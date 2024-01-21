// const nodemailer = require("nodemailer");
// require("dotenv").config();
// const path = require("path");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.USER,
//     pass: process.env.APP_PASSWORD,
//   },
// });

// const mailOptions = {
//     from: {
//       name: "Test mail",
//       address: process.env.USER,
//     }, // sender address
  
//   to: "charith.ddm@gmail.com", // list of receivers
//   subject: "Send test mail", // Subject line
//   text: "Hello world?", // plain text body
//   html: "<b>Hello world?</b>", // html body
//   attachments: [
//     {
//       filename: "test.pdf",
//       path: path.join(__dirname, "test.pdf"),
//       contentType: "application/pdf",
//     },
//     {
//       filename: "testPic1.jpg",
//       path: path.join(__dirname, "testPic1.jpg"),
//       contentType: "image/jpg",
//     },
//   ],
// };

// const sendMail = async () => {
//   try {
//     await transporter.sendMail(mailOptions);
//     console.log("Email sent successfully");
//   } catch (error) {
//     console.error(error);
//   }
// };
// sendMail();
