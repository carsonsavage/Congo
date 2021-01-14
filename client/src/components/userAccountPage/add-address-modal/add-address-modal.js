import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { Form, Col } from "react-bootstrap";

function AddAddressModal({ address, setAddress, handleAddressAdd, dispatch }) {
    return (
        <>
            <Modal.Header>Add an address</Modal.Header>
            <Modal.Content>
                <Form
                    onSubmit={(event) => {
                        console.log(event);
                    }}
                >
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="John Doe"
                            value={address.name}
                            required
                            name="name"
                            onChange={(e) => {
                                const { name, value } = e.target;
                                setAddress({
                                    ...address,
                                    [name]: value,
                                });
                            }}
                        />
                    </Form.Group>
                    <Form.Group size="lg">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            class="ui left icon input"
                            type="text"
                            placeholder="Street address or P.O. Box"
                            value={address.address1}
                            required
                            name="address1"
                            onChange={(e) => {
                                const { name, value } = e.target;
                                setAddress({
                                    ...address,
                                    [name]: value,
                                });
                            }}
                        />
                        <Form.Control
                            class="ui left icon input"
                            type="text"
                            value={address.address2}
                            placeholder="Apt, suite, unit, building, floor, etc."
                            name="address2"
                            onChange={(e) => {
                                const { name, value } = e.target;
                                setAddress({
                                    ...address,
                                    [name]: value,
                                });
                            }}
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                value={address.city}
                                name="city"
                                onChange={(e) => {
                                    const { name, value } = e.target;
                                    setAddress({
                                        ...address,
                                        [name]: value,
                                    });
                                }}
                            />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                as="select"
                                required
                                name="state"
                                onChange={(e) => {
                                    const { name, value } = e.target;
                                    setAddress({
                                        ...address,
                                        [name]: value,
                                    });
                                }}
                            >
                                <option> </option>
                                <option value="AK">Alaska</option>
                                <option value="AL">Alabama</option>
                                <option value="AR">Arkansas</option>
                                <option value="AZ">Arizona</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DC">District of Columbia</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="IA">Iowa</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MD">Maryland</option>
                                <option value="ME">Maine</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MO">Missouri</option>
                                <option value="MS">Mississippi</option>
                                <option value="MT">Montana</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="NE">Nebraska</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NV">Nevada</option>
                                <option value="NY">New York</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VA">Virginia</option>
                                <option value="VT">Vermont</option>
                                <option value="WA">Washington</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WV">West Virginia</option>
                                <option value="WY">Wyoming</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                value={address.zipcode}
                                name="zipcode"
                                onChange={(e) => {
                                    const { name, value } = e.target;
                                    setAddress({
                                        ...address,
                                        [name]: value,
                                    });
                                }}
                            />
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <div id="model-buttons">
                    <Button
                        negative
                        onClick={() => {
                            setAddress("");
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
                            handleAddressAdd(address);
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

export default AddAddressModal;
