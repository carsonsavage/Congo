import React, { useEffect, useState } from "react";
import API from "../../util/API.js";
import Wrapper from "../../components/wrapper/wrapper";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Message } from "semantic-ui-react";
function UpdateProducts() {
    const [productId, setProductId] = useState();
    const [newQnty, setNewQnty] = useState();
    const [message, setMessage] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(productId, newQnty);
        API.updateProductsQnty([{ _id: productId, qnty_selected: newQnty }]);
        setProductId("");
        setNewQnty("");
        setMessage("success");
        setTimeout(() => {
            setMessage("");
        }, 3000);
    }

    return (
        <Wrapper>
            <div className="Login">
                <div className="center login-center">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>Product Id</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                onChange={(e) => setProductId(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>Amount To Add</Form.Label>
                            <Form.Control
                                class="ui left icon input"
                                type="number"
                                onChange={(e) =>
                                    setNewQnty(-Math.abs(e.target.value))
                                }
                            />
                        </Form.Group>

                        <Button block size="md" type="submit">
                            Submit
                        </Button>

                        {message && (
                            <Message success>
                                <Message.Header id="contact-us-message">
                                    <i className="ui icon checkmark"></i>
                                    Product Updated
                                </Message.Header>
                            </Message>
                        )}
                    </Form>
                </div>
            </div>
        </Wrapper>
    );
}

export default UpdateProducts;
