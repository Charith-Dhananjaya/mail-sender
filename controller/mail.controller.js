// mail.controller.js
import * as mailService from "../service/mail.service.js";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const sendEmail = async (req, res) => {
    if (!req.body || !req.file) {
        return res.status(400).json({ error: "Data is missing in the request body", status: false });
    }
    const { from, to, subject, text, html} = req.body;
    const filename = req.file.filename;

    const filePath = path.join(__dirname, '../public/documents', filename);
    console.log(filePath);

    try {
        await mailService.sendEmail(from, to, subject, text, html, filename, filePath);
        
        

        res.status(200).json({ message: "Email sent successfully", status: true });
    } catch (error) {
        console.error("Error in sending email:", error);

        res.status(500).json({ error: "Internal Server Error", status: false });
    }
};


/*
let responseObj = {
    "status": "",
    "msg": "",
    "body": {

    },
}


 const sendEmail = (req, res) => {
  try {
    if (!req.body) {
      responseObj = {
        status: "error",
        msg: "Input is missing",
        body: {},
      };
      res.status(500).send(responseObj);
    } else {
      const from = req.body.from;
      const to = req.body.to;
      const subject = req.body.subject;
      const text = req.body.text;
      const html = req.body.html;

      //mail options
      const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: text,
        html: html,
      };

      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.USER,
          pass: process.env.APP_PASSWORD,
        },
      });
      transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            responseObj = {
                status: "error",
                msg: "Email could sent successfully",
                body: err,
              };
              res.status(200).send(responseObj);
    
        }else{
            responseObj = {
                status: "success",
                msg: "Email sent successfully",
                body: {},
              };
              res.status(200).send(responseObj);
        }
      });
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};*/
