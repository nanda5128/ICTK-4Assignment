var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nandhunandana871@gmail.com',
    pass: 'idqw cvnh uskr vzvc'
  }
});

var mailOptions = {
  from: 'nandhunandana871@gmail.com',
  to: 'jj2228391@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'HELLO JEN, How r u??'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});