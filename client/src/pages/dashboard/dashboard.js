import React from 'react';
import './dashboard.css';
import Footer from '../../components/footer/footer';
import Wrapper from '../../components/wrapper/wrapper';
import AccountInfo from '../../components/userAccountPage/account-info/account-info.js';
import SavedAddress from '../../components/userAccountPage/saved-address/saved-address.js';
import SavedPayment from '../../components/userAccountPage/saved-payment/saved-payment.js';
import PrevOrders from '../../components/userAccountPage/prev-orders/prev-orders.js';

function UserDashboard(props) {

    return (
        <>

            <Wrapper>
                <div className="dashboard-div">
                    <AccountInfo />
                    <SavedAddress />
                    <SavedPayment />
                    <PrevOrders />
                </div>
            </Wrapper>

            <Footer />
        </>
    )
};

export default UserDashboard;