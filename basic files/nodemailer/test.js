const mailer = require("./mailer.js");

//how to call an email to send to the etherreal email for testing. First param is subject, second is the HTML Body to send
mailer.sendEmail("Test Subject", `<h1>Hola senor</h1>`);