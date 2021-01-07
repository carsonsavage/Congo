import React from "react";
import Moment from "react-moment";

function ProductCta() {
    Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    };

    const daysToAdd = Math.floor(Math.random() * 9);
    const date = new Date().addDays(daysToAdd);
    const formatedDate = date.toLocaleDateString(undefined, {
        weekday: "long",
        month: "short",
        day: "numeric",
    });

    return (
        <>
        <h1>${29.93}</h1>
        <p>Delivery: {formatedDate}</p>
        <h3>In Stock.</h3>

        <select>
            <option>1</option>
        </select>
        </>
    );
}

export default ProductCta;
