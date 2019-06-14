'use strict';
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'MyResume.kaleniuk@gmail.com',
		pass: 'makaron1488'
	}
});


let postMessage = (req, res, next) => {
  let data = req.body.text;
  console.log(data)
  let message = '{'+data.firstName + ' ' + data.lastName +'}' +
                "("+data.phone+")"+
                "["+data.text+"]";
  let mailOptions = {
      from: "MyResume.kaleniuk@gmail.com", // sender address
      to: "mr.kalinuk@gmail.com", // list of receivers
      subject: "Сообщение с сайта резюме ("+ data.email +")", // Subject line
      text:  message, // plain text body
  };
  transporter.sendMail(mailOptions, function (error, info) {});
  res.send({code: 500, txt:'12345'});
};

router.post('/postMessage', postMessage);


module.exports = router;
