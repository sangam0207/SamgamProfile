const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");
const users = require("../models/userSchema");

router.post("/contact", async (req, res) => {
  const { fname, lname, email, mobile, message } = req.body;
  //console.log(fname,lname,email,mobile,message);
  // console.log(req.body)
  if (!fname || !lname || !email || !mobile) {
    res.status(401).json({ status: 401, error: "All inputs require" });
  }
  try {
    const preUser = await users.findOne({ email: email });
    if (preUser) {
      //console.log('already exist')
      const userMessage = await preUser.MessageSave(message);
      console.log(userMessage);
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });
      const mailOptions = {
        from: process.env.EMAIL,
        to:process.env.USERMAIL ,
        subject: `Hello Sangam, this is ${fname}`,
        html:`
        <h3 style="color: #333; font-family: 'Arial', sans-serif;">I hope you are doing well</h3>
        <p style="color: #555;">This is my mobile number: ${mobile}</p>
        <p style="color: #555;">This is Email id ${email}</p>
        <p style="color: #555;">Please feel free to contact me</p>
        <p style="color: #333;">${message}</p>
      `,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error", error);
        } else {
          console.log("Email sent" + info.response);
          res
            .status(201)
            .json({ status: 201, message: "email sent successfully" });
        }
      });
    } else {
      const finalUser = new users({ fname, lname, email, mobile, message });
      const storeData = await finalUser.save();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });
      const mailOptions = {
        from: process.env.EMAIL,
          to:process.env.USERMAIL,
          subject: `Hello Sangam, this is ${fname}`,
          html: `
          <h3 style="color: #333; font-family: 'Arial', sans-serif;">I hope you are doing well</h3>
          <p style="color: #555;">This is my mobile number: ${mobile}</p>
          <p style="color: #555;">This is Email id ${email}</p>
          <p style="color: #555;">Please feel free to contact me</p>
          <p style="color: #333;">${message}</p>
        `,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error", error);
        } else {
          console.log("Email sent" + info.response);
          res
            .status(201)
            .json({ status: 201, message: "email sent successfully" });
        }
      });
      res.status(201).json({
        status: 201,
        storeData,
      });
    }
  } catch (error) {
    res.status(401).json({ status: 401, error: "All input require" });
  }
});

module.exports = router;
