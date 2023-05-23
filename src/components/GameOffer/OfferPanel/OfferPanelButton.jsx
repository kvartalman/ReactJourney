import React from 'react';

const OfferPanelButton = (props) => {
    return (
        <form action={props.link} target={'_blank'} className={'offerPanelButton'}>
            <button className={''}>
                {props.name}
            </button>
        </form>
    )
}

export default OfferPanelButton