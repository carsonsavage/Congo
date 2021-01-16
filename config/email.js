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

    generateOrderConfirmEmail: (
        email,
        order_num,
        item_count,
        preTax,
        shippingHandling,
        tax,
        order_total,
        address,
        delivery_date
    ) => {
        HTMLGEN.orderConfirm(
            order_num,
            item_count,
            preTax,
            shippingHandling,
            tax,
            order_total,
            address,
            delivery_date
        ).then((html) => {
            NodeMailer.sendEmail(
                `Congo Order Confirmation - Order#${order_num}`,
                email,
                html
            );
        });
    },
};

module.exports = Emailer;
