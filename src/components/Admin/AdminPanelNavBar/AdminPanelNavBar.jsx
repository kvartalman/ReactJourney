import React, {useEffect} from "react";
import './AdminPanelNavBar.css';
import {NavLink} from "react-router-dom";

const AdminPanelNavBar = (props) => {

    const handleMenuChoice = () => {
        props.setMenuIndex(0);
        props.setBackIndex(0);
    };

    const handleContentChoice = () => {
        props.setBackIndex(1);
    }

    const handleTurningBack = () => {
        if (props.backIndex > 0) {
            if (props.backIndex === 1 && props.menuIndex === 1) {
                props.setMenuIndex(0);
                props.setBackIndex(0);
            } else {
                props.setBackIndex(prev => prev - 1)
            }
        }
    }

    useEffect(() => {
        console.log(props.backIndex, props.menuIndex, 'nav')
    }, [props.backIndex]);

    return (
        <div id={'adminPanelNavBarMainContainer'}>
            <div id={'adminPanelNavBarFirstContainer'}>
                <div id={'adminPanelNavBarShopAndMainMenuContainer'}>
                    <div id={'adminPanelNavBarBackToShopContainer'}>
                        <NavLink to={'/'} id={'adminPanelNavBarBackToShop'}>Back to shop</NavLink>
                    </div>
                    <div id={'adminPanelNavBarMenuButtonContainer'}>
                        <button onClick={() => {
                            handleMenuChoice()
                        }}>Main menu
                        </button>
                    </div>
                </div>
                <div id={'adminPanelNavBarCategoriesContainer'}>
                    <div className={'adminPanelNavBarCtg'}>
                        <button>Editor</button>
                    </div>
                    <div className={'adminPanelNavBarCtg'}>
                        <button>Messages</button>
                    </div>
                    <div>
                        <button>'To Do' list</button>
                    </div>
                </div>
            </div>
            <div id={'adminPanelNavBarSecondContainer'}>
                <button onClick={() => handleTurningBack()}>
                    Back
                </button>
            </div>
        </div>
    );
};

export default AdminPanelNavBar;