import React, { useContext } from "react";
import "./product-details.css";
import { useHistory } from "react-router-dom";
import Wrapper from "../../components/wrapper/wrapper";
import Footer from "../../components/footer/footer";

function Orders(props) {

    const {params} = props.match;
    const history = useHistory();

    return (
        <>
            <Wrapper>
                <button className="ui inverted blue button fluid" onClick={()=>{history.goBack()}}><i className="ui icon angle left"></i>back to results</button>
                <p>details{params.productId}</p>
            </Wrapper>

            <Footer />
        </>
    );
}

export default Orders;
