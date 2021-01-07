import React from "react";

function AboutItemList({ features }) {
    return (
        <>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </>
    );
}

export default AboutItemList;