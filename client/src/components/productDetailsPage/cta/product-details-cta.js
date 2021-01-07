import React from "react";
import { Label } from "semantic-ui-react";
import { Form, Row, Col } from "react-bootstrap";

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
            <Label tag className="ui label massive red">
                ${234.52}
            </Label>
            <p>Delivery: {formatedDate}</p>
            <h3>In Stock.</h3>
            <label>Qty:</label>
            <Form.Control as="select" size="sm" className="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Form.Control>
        </>
    );
}

export default ProductCta;
