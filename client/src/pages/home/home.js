import React from 'react';
import Wrapper from '../../components/wrapper/wrapper.js';
import Featured from '../../components/homePage/featured/featured.js';
import Statement from '../../components/homePage/statement/statement.js';
import CallToAction from '../../components/homePage/call-to-action/call-to-action.js';
import Footer from '../../components/footer/footer.js';

function Home(){
    return (
        <div>
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