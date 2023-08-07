import React from "react";

const CarouselItems = (props) => {

    return (
        <>
            <img
                className="d-block w-100"
                src={props.srcImg}
                alt={props.altImg}
            />
                <h3>{props.text}</h3>
        </>
    )
}

export default CarouselItems