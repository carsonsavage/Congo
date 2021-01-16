import "./featured.css";
import React, { useEffect, useState } from "react";
import ItemsCarousel from "react-items-carousel";
import AddToCartBtn from "../../productDetailsPage/cta/add-to-cart-btn.js";
import API from "../../../util/API.js";

export default () => {
    useEffect(() => {
        API.getFeatured().then(({ data }) => {
            setFeaturedProducts(data);
        });
    });

    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 30;
    return (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={4}
                gutter={20}
                leftChevron={<i className="ui icon angle left huge"></i>}
                rightChevron={<i className="ui icon angle right huge"></i>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                {featuredProducts.map(({ _id, title, images, price }) => (
                    <>
                        <br></br>
                        <div className="featured">
                            {/* <h5>{title.substring(0, 60) + "..."}</h5> */}
                            <div
                                className="product-img-wrapper"
                                id="featuredimage"
                            >
                                <img src={images[0]} height="200"></img>
                            </div>
                            <div className="productprice">
                                <p>
                                    <br></br>${price}
                                </p>
                            </div>
                            <div className="cartbutton">
                                <AddToCartBtn id={_id} qntySelected={1} />
                            </div>
                        </div>
                    </>
                ))}
            </ItemsCarousel>
        </div>
    );
};
