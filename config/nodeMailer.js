const nodemailer = require("nodemailer");

module.exports = {
    // async..await is not allowed in global scope, must use a wrapper
    sendEmail: async function (subject, htmlBody) {

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'cleta.veum71@ethereal.email',
                pass: 'fnjfHShPr2z1PGV76c'
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Congo Marketplace"', // sender address
            to: "cleta.veum71@ethereal.email", // list of receivers
            subject: subject, // Subject line
            html: htmlBody, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // // Preview only available when sending through an Ethereal account
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
}