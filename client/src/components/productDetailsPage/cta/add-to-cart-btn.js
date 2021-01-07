import React, { useState } from "react";
import { Button, Icon, Label } from "semantic-ui-react";

function AddToCartBtn({ id }) {
    const [buttonLoading, setButtonLoading] = useState(false);

    const callToAdd = (event, _id) => {
        event.preventDefault();
        setButtonLoading(true);
        console.log(_id);

        setTimeout(() => {
            setButtonLoading(false);
        }, 5000);
    };

    return (
        <Button
            animated="vertical"
            className="addToCartBtn green"
            loading={buttonLoading}
            onClick={(e) => {
                callToAdd(e, id);
            }}
        >
            <Button.Content hidden>
                <Icon name="add to cart" />
            </Button.Content>
            <Button.Content visible>Add to Cart</Button.Content>
        </Button>
    );
}

export default AddToCartBtn;
