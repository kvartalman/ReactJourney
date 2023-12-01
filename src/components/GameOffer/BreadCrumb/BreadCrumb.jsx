import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {NavLink} from "react-router-dom";
import './BreadCrumb.css';

function BreadCrumb(props) {

    return (
        <Breadcrumb>
            <Breadcrumb.Item href=''>
                <NavLink to={'/'} className={'breadCrumbLink'}>Main</NavLink>
            </Breadcrumb.Item>
            {
                props.product ?
                    <>
                        <Breadcrumb.Item>
                            <NavLink to={`/categories/${props.game}`} className={'breadCrumbLink'}>
                                {require('change-case').sentenceCase(props.game)}
                            </NavLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <NavLink to={`/categories/${props.game}/${props.sub}`} className={'breadCrumbLink'}>
                                {require('change-case').sentenceCase(props.sub)}
                            </NavLink>
                        </Breadcrumb.Item>
                    </>
                    :
                    props.sub ?
                        <Breadcrumb.Item>
                            <NavLink to={`/categories/${props.game}`} className={'breadCrumbLink'}>
                                {require('change-case').sentenceCase(props.game)}
                            </NavLink>
                        </Breadcrumb.Item>
                        :
                        null
            }
            <Breadcrumb.Item active>
                <span className={'breadCrumbActive'}>
                    {
                        props.product ?
                            require('change-case').sentenceCase(props.product)
                            :
                            props.sub ?
                                require('change-case').sentenceCase(props.sub)
                                :
                                require('change-case').sentenceCase(props.game)
                    }
                </span>
            </Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default BreadCrumb;