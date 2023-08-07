import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {NavLink} from "react-router-dom";
import './BreadCrumb.css'

function BreadCrumb(props) {

    let breadCrumbsArr = props.linkNames.map(link => (
        <Breadcrumb.Item>
            <NavLink to={link[1]} className={'breadCrumbLink'}>
               {link[0]}
            </NavLink>
        </Breadcrumb.Item>
    ))

    return (
        <Breadcrumb>
            <Breadcrumb.Item href=''>
                <NavLink to={'/'} className={'breadCrumbLink'}>Main</NavLink>
            </Breadcrumb.Item>
            {breadCrumbsArr}
            <Breadcrumb.Item active>
                <span className={'breadCrumbActive'}>{props.activeLinkName}</span>
            </Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default BreadCrumb;