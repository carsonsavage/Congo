import React from 'react';
import Footer from '../../components/footer/footer';
import {MainHeader} from '../../components/header/header';
import Wrapper from '../../components/wrapper/wrapper';
import AccountInfo from '../../components/userAccountPage/account-info/account-info.js';
import SavedAddress from '../../components/userAccountPage/saved-address/saved-address.js';
import SavedPayment from '../../components/userAccountPage/saved-payment/saved-payment.js';
import PrevOrders from '../../components/userAccountPage/prev-orders/prev-orders.js';

function UserDashboard(props){
    return (
        <>
        <MainHeader />

        <Wrapper>
            <AccountInfo id={props.match.params.id} />
            <SavedAddress />
            <SavedPayment />
            <PrevOrders />
        </Wrapper>

        <Footer />
        </>
    )
};

export default UserDashboard;