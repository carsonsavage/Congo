import "./featured.css";
import React, { useEffect, useState } from "react";
import ItemsCarousel from "react-items-carousel";
import AddToCartBtn from "../../productDetailsPage/cta/add-to-cart-btn.js";
import API from "../../../util/API.js";

export default () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        API.getFeatured().then(({ data }) => {
            setFeaturedProducts(data);
        });
    }, []);

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 30;
    return (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={3}
                gutter={30}
                leftChevron={<button>{"<"}</button>}
                rightChevron={<button>{">"}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                {featuredProducts.map(({_id, title, images, price }) => (
                    <>
                        <br></br>
                        <div style={{ height: 400, background: "#f0f7f0" }}>
                            <h3>{title}</h3>
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
                                <AddToCartBtn id={_id}/>
                            </div>
                        </div>
                    </>
                ))}
            </ItemsCarousel>
        </div>
    );
};
