import React from 'react';


const CardsButton = (props) => {
    return (
        <form action={props.link} target={'_blank'} className={'buttonForm'}>
            <button className={props.class}>
                <span className={`${props.type}LineTop`}></span>
                <span className={`${props.type}LineRight`}></span>
                <span className={`${props.type}LineBottom`}></span>
                <span className={`${props.type}LineLeft`}></span>
                {props.name}
            </button>
        </form>
    )
}

export default CardsButton

