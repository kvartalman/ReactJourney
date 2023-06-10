import React from "react";
import {NavLink} from "react-router-dom";
import './NotFound.css'

const NotFound = (props) => {

    const notFoundLinksArr = props.links.map(link => (
        <span className={link.spanClass}>
            <NavLink key={link.id} to={link.to} className={link.linkClass}>
                {link.text}
            </NavLink>
        </span>
    ))

    return (
        <>
            <div id={'notFoundLinksBlock'}>
                {notFoundLinksArr}
            </div>
        </>
    )
}

export default NotFound