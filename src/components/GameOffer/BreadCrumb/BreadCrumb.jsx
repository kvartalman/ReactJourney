import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {NavLink} from "react-router-dom";
import {BreadcrumbItem} from "react-bootstrap";

function BreadCrumb(props) {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href=''>
                <NavLink to={'/'}>Main</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                Dota 2
            </Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default BreadCrumb;