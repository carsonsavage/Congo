import React from 'react';
import Header from '../../components/header/header.js';
import Wrapper from '../../components/wrapper/wrapper.js';
import Featured from '../../components/featured/featured.js';
import Statement from '../../components/statement/statement.js';
import CallToAction from '../../components/call-to-action/call-to-action.js';
import Footer from '../../components/footer/footer.js';

function Home(){
    return (
        <div>
            <Header />
            
            <Wrapper>
                <Featured />
                <Statement />
                <CallToAction />
            </Wrapper>

            <Footer />
        </div>
    )
};

export default Home;