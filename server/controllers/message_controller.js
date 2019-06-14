'use strict';
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'MyResume_kaleniuk@gmail.com',
		pass: 'makaron1488'
	}
});


дуе postMessage = (req, res, next) => {
  var text = req.body;
  console.log(text)
  // var mailOptions = {
  //     from: "MyResume_kaleniuk@gmail.com", // sender address
  //     to: "mr.kalinuk@gmail.com", // list of receivers
  //     subject: "Сообщение с сайта резюме", // Subject line
  //     text:  req.body.text, // plain text body
  // };
  // transporter.sendMail(mailOptions, function (error, info) {});
  res.send({code: 500, txt:'12345'});
};

router.post('/postMessage', postMessage);


module.exports = router;
