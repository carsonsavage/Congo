import React, { useState } from "react";
import { Icon, Label } from "semantic-ui-react";
import { Form } from "react-bootstrap";
import AddToCartBtn from "./add-to-cart-btn.js";

function ProductCta({ id, price, quantity }) {
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

    function generateOptions(count) {
        let i;
        let genQty = [];
        for (i = 0; i < count; i++) {
            genQty.push(i + 1);
        }
        return (
            <>
                {genQty.map((num, index) => (
                    <option key={index} value={num}>
                        {num}
                    </option>
                ))}
            </>
        );
    }

    const [qntySelected, setQntySelected] = useState(1);
    let stockClass;
    let stockDisplay;
    let isDisabled = false;
    if (quantity === 0) {
        stockDisplay = "Out of Stock";
        stockClass = "out-of-stock";
        isDisabled = true;
    } else if (quantity <= 10) {
        stockDisplay = "Limited Stock";
        stockClass = "limited-stock";
    } else {
        stockDisplay = "In Stock";
        stockClass = "in-stock";
    }
    return (
        <div className="cart-cta-div">
            <div className="cta-divs">
                <Label tag className="ui label massive red">
                    ${price}
                </Label>
            </div>
            <div className="cta-divs">
                <p>
                    Delivery: <span>{formatedDate}</span>
                </p>
            </div>
            <div className="cta-divs">
                <h3 className={stockClass}>{stockDisplay}</h3>
            </div>
            <div className="clearfix cta-divs">
                <label className="float-left">Qty:</label>
                <Form.Control
                    as="select"
                    size="sm"
                    className="select float-left"
                    onChange={(e) => {
                        setQntySelected(e.target.value);
                    }}
                >
                    {generateOptions(quantity)}
                </Form.Control>
            </div>
            <div className="cta-divs addtocart">
                <AddToCartBtn
                    id={id}
                    qntySelected={qntySelected}
                    isDisabled={isDisabled}
                />
                <br />
                <Icon name="lock" /> Secure transaction
            </div>
        </div>
    );
}

export default ProductCta;
