import React from "react";

const SubCtgListPopup = (props) => {

    return (
        <>
            {props.subCategories ?
                props.subCategories.map((sub, index) => (
                <div key={index} onClick={() => props.onSelect(sub)}>
                    <p>{sub.name}</p>
                </div>
            ))
                :
                null
            }
        </>
    )
};

export default SubCtgListPopup;