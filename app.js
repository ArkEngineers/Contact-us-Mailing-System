import express from 'express'
const app = express();
const port = 3000;


let transporter = nodemailer.createTransport ( {
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});

let mailOptions = {
    from: '"Team Example" <from@xxx.com>',
    to: 'user1@xxx.com, user2@xxx.com',
    subject: 'Nice myNodemailer test',
    text: 'Hey there! This is our first message sent with our Nodemailer ;) ',
    html: '<b>Hey there! </b><br> This is our first message sent with outNodemailer'
};

transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });

  
app.listen (port, () => {
    console.log(`mynodemailerProject is listening at http://localhost:${port}`)
})