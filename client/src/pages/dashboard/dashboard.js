import React, { useContext } from "react";
import "./dashboard.css";
import Footer from "../../components/footer/footer";
import Wrapper from "../../components/wrapper/wrapper";
import AccountInfo from "../../components/userAccountPage/account-info/account-info.js";
import SavedAddress from "../../components/userAccountPage/saved-address/saved-address.js";
import SavedPayment from "../../components/userAccountPage/saved-payment/saved-payment.js";

function UserDashboard() {
    return (
        <>
            <Wrapper>
                <div className="dashboard-div">
                    <AccountInfo />
                    <SavedAddress />
                    <SavedPayment />
                </div>
            </Wrapper>
            <Footer />
        </>
    );
}

export default UserDashboard;
