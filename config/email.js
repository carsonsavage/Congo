const HTMLGEN = require("../email-html-generator/htmlGenerator.js");

const Emailer = {
    generateContactUsEmail: (emailObj) => {
        //do something here
        HTMLGEN.contactUs(emailObj).then((html) => {
            console.log(html);
        });
    },
};

module.exports = Emailer;
