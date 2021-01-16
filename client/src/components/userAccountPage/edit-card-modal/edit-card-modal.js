import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { Form, Col } from "react-bootstrap";

function EditCardModal({ dispatch, creditCard, setCreditCard, handleCardEdit }) {
    return (
        <>
            <Modal.Header>Edit Payment Card</Modal.Header>
            <Modal.Content>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control
                            type="tel"
                            inputMode="numeric"
                            maxLength="4"
                            placeholder="xxxx"
                            value={creditCard.card_number}
                            required
                            onChange={(e) =>
                                setCreditCard({
                                    ...creditCard,
                                    card_number: e.target.value,
                                })
                            }
                        />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Name on card</Form.Label>
                        <Form.Control
                            required
                            value={creditCard.card_name}
                            onChange={(e) =>
                                setCreditCard({
                                    ...creditCard,
                                    card_name: e.target.value.toUpperCase(),
                                })
                            }
                        />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Expiration date</Form.Label>
                        <Form.Row>
                            <Col xs={5}>
                                <Form.Control
                                    as="select"
                                    value={creditCard.expire_month}
                                    onChange={(e) =>
                                        setCreditCard({
                                            ...creditCard,
                                            expire_month: e.target.value,
                                        })
                                    }
                                    required
                                >
                                    <option> </option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </Form.Control>
                            </Col>
                            <div>/</div>
                            <Col xs={5}>
                                <Form.Control
                                    as="select"
                                    value={creditCard.expire_year}
                                    onChange={(e) =>
                                        setCreditCard({
                                            ...creditCard,
                                            expire_year: e.target.value,
                                        })
                                    }
                                    required
                                >
                                    <option> </option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Form.Row>
            </Modal.Content>
            <Modal.Actions>
                <div id="model-buttons">
                    <Button
                        negative
                        onClick={() => {
                            setCreditCard("");
                            dispatch({ type: "CLOSE_MODAL" });
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        positive
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            handleCardEdit(creditCard, creditCard.index);
                            dispatch({ type: "CLOSE_MODAL" });
                        }}
                    >
                        Submit
                    </Button>
                </div>
            </Modal.Actions>
        </>
    );
}

export default EditCardModal;