const EmailHTML = {
    contactUs: (contactObj) => {
        return new Promise((resolve, reject) => {
            resolve(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Contact-us email</title>
                </head>
                <body>
                    <style>
                        body {
                            width: 60%;
                            margin: 0 auto;
                            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                        }

                        header {
                            background-color: #cccccc;
                            width: 100%;
                            height: 200px;
                            text-align: center;
                        }

                        header img {
                            width: 400px;
                            margin-top: 10px;
                        }

                        footer {
                            margin-top: 20px;
                            background-color: #cccccc;
                            height: 200px;
                            text-align: center;
                        }

                        .subject {
                            text-align: center;
                            text-transform: capitalize;
                        }

                        .user-contact p {
                            text-align: center;
                        }

                        .message {
                            padding: 30px 0;
                            line-height: 2em;
                        }

                        address p {
                            line-height: 0.5em;
                        }

                        address {
                            padding: 5px;
                        }

                        footer {
                            padding: 5px;
                        }
                    </style>

                    <header>
                        <img src="https://i.ibb.co/NFCHpsp/logo.png" alt="logo" />
                    </header>
                    <div class="subject">
                        <h1>**[${contactObj.subject}]** - webpage contact form</h1>
                    </div>
                    <div class="user-contact">
                        <hr />
                        <h3>Contact Info:</h3>
                        <p>
                            <b>Name:</b>
                            <span>${contactObj.name}</span>
                        </p>
                        <p>
                            <b>User Email:</b>
                            <a href="mailto:${contactObj.email}">${contactObj.email}</a>
                        </p>
                    </div>
                    <hr />
                    <div class="message">
                        <h5>Message:</h5>
                        <p>${contactObj.message}</p>
                    </div>
                    <hr />
                    <div></div>
                    <footer>
                        <p>
                            **This email is automatically generated from a web form
                            submission**
                        </p>
                        <address>
                            <p>Congo Online</p>
                            <p>3953 Geneva Ln</p>
                            <p>New York, NY 10010</p>
                        </address>
                        <h5>&copy; Congo Marketplace 2021</h5>
                    </footer>
                </body>
            </html>
            `);
        });
    },

    resetPassword: (code, user_id) => {
        return new Promise((resolve, reject) => {
            resolve(`<!DOCTYPE html>
            <html>
                <head>
                    <title></title>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <style type="text/css">
                        /* CLIENT-SPECIFIC STYLES */
                        body,
                        table,
                        td,
                        a {
                            -webkit-text-size-adjust: 100%;
                            -ms-text-size-adjust: 100%;
                        }
                        table,
                        td {
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                        }
                        img {
                            -ms-interpolation-mode: bicubic;
                        }
            
                        /* RESET STYLES */
                        img {
                            border: 0;
                            height: auto;
                            line-height: 100%;
                            outline: none;
                            text-decoration: none;
                        }
                        table {
                            border-collapse: collapse !important;
                        }
                        body {
                            height: 100% !important;
                            margin: 0 !important;
                            padding: 0 !important;
                            width: 100% !important;
                        }
            
                        /* MOBILE STYLES */
                        @media screen and (max-width: 600px) {
                            h1 {
                                font-size: 32px !important;
                                line-height: 32px !important;
                            }
                        }
            
                        /* ANDROID CENTER FIX */
                        div[style*="margin: 16px 0;"] {
                            margin: 0 !important;
                        }
                    </style>
            
                    <style type="text/css"></style>
                </head>
                <body
                    style="
                        background-color: #f4f4f4;
                        margin: 0 !important;
                        padding: 0 !important;
                    "
                >
                    <!-- HIDDEN PREHEADER TEXT -->
                    <div
                        style="
                            display: none;
                            font-size: 1px;
                            color: #fefefe;
                            line-height: 1px;
                            font-family: Helvetica, Arial, sans-serif;
                            max-height: 0px;
                            max-width: 0px;
                            opacity: 0;
                            overflow: hidden;
                        "
                    >
                        Reset your password
                    </div>
            
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td bgcolor="#f4f4f4" align="center">
                                <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    style="max-width: 600px"
                                >
                                    <tr>
                                        <td
                                            align="center"
                                            valign="top"
                                            style="padding: 40px 10px 40px 10px"
                                        ></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <!-- HERO -->
                        <tr>
                            <td
                                bgcolor="#f4f4f4"
                                align="center"
                                style="padding: 0px 10px 0px 10px"
                            >
                                <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    style="max-width: 600px"
                                >
                                    <tr>
                                        <td
                                            bgcolor="#ffffff"
                                            align="center"
                                            valign="top"
                                            style="
                                                padding: 40px 20px 20px 20px;
                                                border-radius: 4px 4px 0px 0px;
                                                color: #111111;
                                                font-family: Helvetica, Arial, sans-serif;
                                                font-size: 48px;
                                                font-weight: 400;
                                                letter-spacing: 4px;
                                                line-height: 48px;
                                            "
                                        >
                                            <h1
                                                style="
                                                    font-size: 28px;
                                                    font-weight: 400;
                                                    margin: 0;
                                                    letter-spacing: 0px;
                                                "
                                            >
                                                Reset your password
                                            </h1>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <!-- COPY BLOCK -->
                        <tr>
                            <td
                                bgcolor="#f4f4f4"
                                align="center"
                                style="padding: 0px 10px 0px 10px"
                            >
                                <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    style="max-width: 600px"
                                >
                                    <tr>
                                        <td
                                            bgcolor="#ffffff"
                                            align="left"
                                            style="
                                                padding: 20px 30px 40px 30px;
                                                color: #0e0d0d;
                                                font-family: Helvetica, Arial, sans-serif;
                                                font-size: 18px;
                                                font-weight: 400;
                                                line-height: 25px;
                                            "
                                        >
                                            <p style="margin: 0">
                                                You received this E-mail in response to your
                                                request to reset your password. Click the link and input your passcode provided.
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            bgcolor="#ffffff"
                                            align="left"
                                            style="
                                                padding: 20px 30px 40px 30px;
                                                color: #0e0d0d;
                                                font-family: Helvetica, Arial, sans-serif;
                                                font-size: 18px;
                                                font-weight: 400;
                                                line-height: 25px;
                                            "
                                        >
                                            <h1 style="text-align: center">${code}
                                            </h1>
                                        </td>
                                    </tr>
                                    <!-- BULLETPROOF BUTTON -->
                                    <tr>
                                        <td bgcolor="#ffffff" align="left">
                                            <table
                                                width="100%"
                                                border="0"
                                                cellspacing="0"
                                                cellpadding="0"
                                            >
                                                <tr>
                                                    <td
                                                        bgcolor="#ffffff"
                                                        align="center"
                                                        style="padding: 20px 30px 60px 30px"
                                                    >
                                                        <table
                                                            border="0"
                                                            cellspacing="0"
                                                            cellpadding="0"
                                                        >
                                                            <tr>
                                                                <td
                                                                    align="center"
                                                                    style="
                                                                        border-radius: 3px;
                                                                    "
                                                                    bgcolor="green"
                                                                >
                                                                    <a
                                                                        href="http://localhost:3000/user/reset-password/${user_id}"
                                                                        target="_blank"
                                                                        style="
                                                                            font-size: 20px;
                                                                            font-family: Helvetica,
                                                                                Arial,
                                                                                sans-serif;
                                                                            color: #ffffff;
                                                                            text-decoration: none;
                                                                            color: #ffffff;
                                                                            text-decoration: none;
                                                                            padding: 15px
                                                                                25px;
                                                                            border-radius: 2px;
                                                                            border: 1px
                                                                                solid
                                                                                green;
                                                                            display: inline-block;
                                                                        "
                                                                        >Reset Password</a
                                                                    >
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <!-- COPY -->
                                    <tr>
                                        <td
                                            bgcolor="#ffffff"
                                            align="left"
                                            style="
                                                padding: 0px 30px 0px 30px;
                                                color: #0c0c0c;
                                                font-family: Helvetica, Arial, sans-serif;
                                                font-size: 18px;
                                                font-weight: 400;
                                                line-height: 25px;
                                            "
                                        >
                                            <p style="margin: 0">
                                                This password reset is only valid for the
                                                next 30 minutes.If that doesn't work, copy
                                                and paste the following link in your
                                                browser:
                                            </p>
                                        </td>
                                    </tr>
                                    <!-- COPY -->
                                    <tr>
                                        <td
                                            bgcolor="#ffffff"
                                            align="left"
                                            style="
                                                padding: 20px 30px 20px 30px;
                                                color: #0e0d0d;
                                                font-family: Helvetica, Arial, sans-serif;
                                                font-size: 18px;
                                                font-weight: 400;
                                                line-height: 25px;
                                            "
                                        >
                                            <p style="margin: 0">
                                                <a
                                                    href="http://localhost:3000/user/reset-password/${user_id}"
                                                    target="_blank"
                                                    style="color: green"
                                                    >http://localhost:3000/user/reset-password/${user_id}</a
                                                >
                                            </p>
                                        </td>
                                    </tr>
                                    <!-- COPY -->
                                    <tr>
                                        <td
                                            bgcolor="#ffffff"
                                            align="left"
                                            style="
                                                padding: 0px 30px 20px 30px;
                                                color: #0f0e0e;
                                                font-family: Helvetica, Arial, sans-serif;
                                                font-size: 18px;
                                                font-weight: 400;
                                                line-height: 25px;
                                            "
                                        >
                                            <p style="margin: 0">
                                                If you have any questions, just reply to
                                                this email—we're always happy to help out.
                                            </p>
                                        </td>
                                    </tr>
                                    <!-- COPY -->
                                    <tr>
                                        <td
                                            bgcolor="#ffffff"
                                            align="left"
                                            style="
                                                padding: 0px 30px 40px 30px;
                                                border-radius: 0px 0px 4px 4px;
                                                color: #0c0b0b;
                                                font-family: Helvetica, Arial, sans-serif;
                                                font-size: 18px;
                                                font-weight: 400;
                                                line-height: 25px;
                                            "
                                        >
                                            <p style="margin: 0">
                                                Thank you ,<br />
                                                Congo Team
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <!-- FOOTER -->
                        <tr>
                            <td
                                bgcolor="#f4f4f4"
                                align="center"
                                style="padding: 0px 10px 0px 10px"
                            >
                                <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    style="max-width: 600px"
                                >
                                    <!-- NAVIGATION -->
                                    <tr>
                                        <td
                                            bgcolor="#f4f4f4"
                                            align="left"
                                            style="
                                                padding: 30px 30px 30px 30px;
                                                color: #0e0d0d;
                                                font-family: Helvetica, Arial, sans-serif;
                                                font-size: 14px;
                                                font-weight: 400;
                                                line-height: 18px;
                                            "
                                        >
                                            <p style="margin: 0">
                                                <a
                                                    href="https://myaccount.google.com/intro/dashboard?pli=1"
                                                    target="_blank"
                                                    style="color: #111111; font-weight: 700"
                                                    >Dashboard</a
                                                >
                                                -
                                                <a
                                                    href="https://support.google.com/a/answer/1224185?hl=en"
                                                    target="_blank"
                                                    style="color: #111111; font-weight: 700"
                                                    >Billing</a
                                                >
                                                -
                                                <a
                                                    href="https://support.google.com/mail/?hl=en#topic=7065107"
                                                    target="_blank"
                                                    style="color: #111111; font-weight: 700"
                                                    >Help</a
                                                >
                                            </p>
                                        </td>
                                    </tr>
            
                                    <!-- UNSUBSCRIBE -->
                                    <tr>
                                        <td
                                            bgcolor="#f4f4f4"
                                            align="left"
                                            style="
                                                padding: 0px 30px 30px 30px;
                                                color: #0a0a0a;
                                                font-family: Helvetica, Arial, sans-serif;
                                                font-size: 14px;
                                                font-weight: 400;
                                                line-height: 18px;
                                            "
                                        >
                                            <p style="margin: 0">
                                                If these emails get annoying, please feel
                                                free to
                                                <a
                                                    href="https://support.google.com/mail/answer/8151?co=GENIE.Platform%3DDesktop&hl=en#:~:text=getting%20these%20emails.-,On%20your%20computer%2C%20go%20to%20Gmail.,click%20Unsubscribe%20or%20Change%20preferences."
                                                    target="_blank"
                                                    style="color: #111111; font-weight: 700"
                                                    >unsubscribe</a
                                                >.
                                            </p>
                                        </td>
                                    </tr>
                                    <!-- ADDRESS -->
                                    <tr>
                                        <td
                                            bgcolor="#f4f4f4"
                                            align="left"
                                            style="
                                                padding: 0px 30px 30px 30px;
                                                color: #585555;
                                                font-family: Helvetica, Arial, sans-serif;
                                                font-size: 14px;
                                                font-weight: 400;
                                                line-height: 18px;
                                            "
                                        >
                                            <p style="margin: 0">
                                                Congo <br />
                                                1234 Main Street <br />
                                                New York, MA 56789
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
            </html>
            `);
        });
    },

    orderConfirm: (
        order_num,
        item_count,
        preTax,
        shippingHandling,
        tax,
        order_total,
        address,
        delivery_date
    ) => {
        return new Promise((resolve, reject) => {
            resolve(`<!DOCTYPE html>
            <html>
            
            <head>
                <title></title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <style type="text/css">
                    body,
                    table,
                    td,
                    a {
                        -webkit-text-size-adjust: 100%;
                        -ms-text-size-adjust: 100%;
                    }
            
                    body {
                        height: 100% !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        width: 100% !important;
                    }
            
                    a[x-apple-data-detectors] {
                        color: inherit !important;
                        text-decoration: none !important;
                        font-size: inherit !important;
                        font-family: inherit !important;
                        font-weight: inherit !important;
                        line-height: inherit !important;
                    }
            
                    @media screen and (max-width: 480px) {
                        .mobile-hide {
                            display: none !important;
                        }
            
                        .mobile-center {
                            text-align: center !important;
                        }
                    }
            
                    div[style*="margin: 16px 0;"] {
                        margin: 0 !important;
                    }
                </style>
            
            <body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" bgcolor="#080808">
                
                <table border="0" cellpadding="0" cellspacing="0" width="100%" >
                    <tr>
                        <td align="center" style="background-color: #fcf7f7;" bgcolor="#080808">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                                <tr>
                                    <td align="center" valign="top" style="font-size:0; padding: 35px; background-color: green;" bgcolor="#0e0d0d">
                                        <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">
                                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">
                                                </tr>
                                            </table>
                                        </div>
                                        <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;" class="mobile-hide">
                                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">
                                                <tr>
                                                    <td align="right" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;">
                                                        <table cellspacing="0" cellpadding="0" border="0" align="right">
                                                            <tr>
                                                                <td style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 35px; font-weight: 800;">
                                                                    <p style="font-size: 30px; font-weight: 400; margin: 0; color: #ffffff;"><a href="" target="_blank" style="color: #ffffff; text-decoration: none;"> Order Confirmation </a></p>
                                                                </td>
                                                                <td style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 24px;"> <a href="#" target="_blank" style="color: #0c0c0c; text-decoration: none;">
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding: 35px 35px 20px 35px; background-color: #ffffff;" bgcolor="#ffffff">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                                            <tr>
                                                <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;"> <img src="https://img.icons8.com/carbon-copy/100/000000/checked-checkbox.png" width="125" height="120" style="display: block; border: 0px;" /><br>
                                                    <h2 style="font-size: 30px; font-weight: 800; line-height: 36px; color: green; margin: 0;"> Thank You For Your Order! </h2>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                                                    
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" style="padding-top: 20px;">
                                                    <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                                        <tr>
                                                            <td width="75%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;"> Order Confirmation # </td>
                                                            <td width="25%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;"> ${order_num} </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;"> Purchased Item (${item_count}) </td>
                                                            <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;"> $${preTax} </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;"> Shipping + Handling </td>
                                                            <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;"> $${shippingHandling} </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;"> Sales Tax </td>
                                                            <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;"> $${tax} </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" style="padding-top: 20px;">
                                                    <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                                        <tr>
                                                            <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 3px solid #eeeeee; border-bottom: 3px solid #eeeeee;"> TOTAL </td>
                                                            <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 3px solid #eeeeee; border-bottom: 3px solid #eeeeee;"> $${order_total} </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" height="100%" valign="top" width="100%" style="padding: 0 35px 35px 35px; background-color: #ffffff;" bgcolor="#ffffff">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px;">
                                            <tr>
                                                <td align="center" valign="top" style="font-size:0;">
                                                    <div style="display:inline-block; max-width:50%; min-width:240px; vertical-align:top; width:100%;">
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">
                                                            <tr>
                                                                <td align="left" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px;">
                                                                    <p style="font-weight: 800;">Delivery Address</p>
                                                                    <p>${address.address1} ${address.address2} <br> ${address.city} , ${address.state} <br> ${address.zipcode} </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div style="display:inline-block; max-width:50%; min-width:240px; vertical-align:top; width:100%;">
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px;">
                                                            <tr>
                                                                <td align="left" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px;">
                                                                    <p style="font-weight: 800;">Estimated Delivery Date</p>
                                                                    <p>${delivery_date}</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style=" padding: 35px; background-color:#005300;" bgcolor="#1b9ba3">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                                            <tr>
                                                <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">
                                                    <h2 style="font-size: 24px; font-weight: 800; line-height: 30px; color: #ffffff; margin: 0;"> Get 30% off your next order. </h2>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="padding: 25px 0 15px 0;">
                                                    <table border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td align="center" style="border-radius: 5px;" bgcolor="#66b3b7"> <a href="http://localhost:3000/" target="_blank" style="font-size: 18px; font-family: Open Sans, Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 5px; background-color: green; padding: 15px 30px; border: 1px solid #f0e6e6; display: block;">Shop Again</a> </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding: 35px; background-color: #ffffff;" bgcolor="#ffffff">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                                            <tr>
                                                <td align="center">  </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px; padding: 5px 0 10px 0;">
                                                    <p style="font-size: 14px; font-weight: 800; line-height: 18px; color: #f7f7f7;">  <p>410 Terry Ave WA <br> North Seattle, <br>Cambridge, 98109-5210</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px;">
                                                    <p style="font-size: 14px; font-weight: 400; line-height: 20px; color: #777777;"> If you didn't create an account using this email address, please ignore this email or <a href="#" target="_blank" style="color: #777777;">unsusbscribe</a>. </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            
            </html>`);
        });
    },
};

module.exports = EmailHTML;
