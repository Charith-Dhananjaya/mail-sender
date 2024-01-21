import express from "express";
import * as mailController from "../controller/mail.controller.js"
import upload from "../config/configMulter.js";
const router = express.Router();



router.post('/sendEmail',upload.single('document'), mailController.sendEmail);


export default router;