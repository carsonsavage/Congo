import React from "react";
import './product-images.css';

function SmallProductImages({ images, setImageState }) {
    return (
        <>
            {images.map((imageUrl) => (
                <img src={imageUrl} className="small-product-icon" onPointerOver={()=>{ setImageState(imageUrl)}}/>
            ))}
        </>
    );
}

export default SmallProductImages;