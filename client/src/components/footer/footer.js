import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css";

const FooterPage = () => {
return (
    <MDBFooter color="dark grey" className="font-small pt-4 mt-4" id="footer">
        <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
            <MDBCol md="4">
            <h4 className="title">Congo</h4>
            <p>
                Making shopping a breeze.
            </p>
            </MDBCol>
            <MDBCol md="4">
            <h4 className="title">Issues?</h4>
            <a href="#">Contact us here</a>
        </MDBCol>
        <MDBCol md="4">
            <h4 className="title">Github Pages:</h4>
            <ul>
                <li className="list-unstyled">
                    <a href="https://github.com/DaySloth">Allister</a>
                </li>
                <li className="list-unstyled">
                    <a href="https://github.com/carsonsavage">Carson</a>
                </li>
                <li className="list-unstyled">
                    <a href="https://github.com/beshayr2020">Beshayr</a>
                </li>
                <li className="list-unstyled">
                    <a href="https://github.com/tlee0825">Teshera</a>
                </li>
            </ul>
        </MDBCol>
        </MDBRow>
    </MDBContainer>
    <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/DaySloth/Project3"> Congo </a>
        </MDBContainer>
    </div>
    </MDBFooter>
);
}

export default FooterPage;