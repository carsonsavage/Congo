import React, { useContext } from "react";
import "./dashboard.css";
import Footer from "../../components/footer/footer";
import Wrapper from "../../components/wrapper/wrapper";
import AccountInfo from "../../components/userAccountPage/account-info/account-info.js";
import SavedAddress from "../../components/userAccountPage/saved-address/saved-address.js";
import SavedPayment from "../../components/userAccountPage/saved-payment/saved-payment.js";
import UserContext from "../../util/userContext.js";

function UserDashboard() {
    const { logoutUser } = useContext(UserContext);
    return (
        <>
            <Wrapper>
                <div className="dashboard-div">
                    <button onClick={logoutUser}>Logout</button>
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
