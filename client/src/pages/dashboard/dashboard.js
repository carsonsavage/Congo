import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Wrapper from '../../components/wrapper/wrapper';
import AccountInfo from '../../components/account-info/account-info.js';
import SavedAddress from '../../components/saved-address/saved-address.js';
import SavedPayment from '../../components/saved-payment/saved-payment.js';
import PrevOrders from '../../components/prev-orders/prev-orders.js';

function UserDashboard(props){
    return (
        <>
        <Header />

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