const nodemailer = require("nodemailer");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/app"));

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname + "/app/index.html"));
});

app.post("/sendmail", function(req, res) {
  var mailOptions = {
    to: "contato@breakfastapp.com.br",
    from: req.body.name,
    subject: "BreakfastApp Contact Form: " + req.body.name,
    text: req.body.message,
    html:
      "You have received a new message from your website contact form. Here are the details:" +
      "<br></br> Name: " +
      req.body.name +
      "<br></br> Email: " +
      req.body.email +
      "<br></br> Phone: " +
      req.body.phone +
      "<br></br> Type: " +
      req.body.type +
      "<br></br> Message: " +
      req.body.message
  };

  var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
      user: "2c995e4da82aad",
      pass: "ad9ffe65341932"
    }
  });

  transporter.sendMail(mailOptions, (err, response) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: "Error on send mail."
      });
    } else {
      return res.status(200).json(response);
    }
  });
});app/

app.listen(3000);
