const HTMLGEN = require("../email-html-generator/htmlGenerator.js");
const NodeMailer = require("./nodeMailer.js");

const Emailer = {
    generateContactUsEmail: (emailObj) => {
        //do something here
        HTMLGEN.contactUs(emailObj).then((html) => {
            NodeMailer.sendEmail(
                `**[${emailObj.subject}]** - webpage contact form`,
                "user.support@congo-marketplace.com",
                html
            );
        });
    },
    generateResetPasswordEmail: (email, code, user_id) => {
        //do something here
        HTMLGEN.resetPassword(code, user_id).then((html) => {
            NodeMailer.sendEmail(
                `[Reset Password Link] - Congo Marketplace`,
                email,
                html
            );
        });
    },
};

module.exports = Emailer;
