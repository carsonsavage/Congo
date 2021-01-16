const { resolve } = require("path");

const EmailHTML = {
    contactUs: (contactObj) => {
        return new Promise((resolve, reject) => {
            resolve(`
            <h1>${contactObj.name}</h1>
            <h1>${contactObj.email}</h1>
            <h1>${contactObj.message}</h1>`);
        });
    },
};

module.exports = EmailHTML;
