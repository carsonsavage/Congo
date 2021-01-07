import React from "react";

function AboutItemList({ features }) {
    return (
        <>
            <ul>
                {features.map((feature) => (
                    <li>{feature}</li>
                ))}
            </ul>
        </>
    );
}

export default AboutItemList;