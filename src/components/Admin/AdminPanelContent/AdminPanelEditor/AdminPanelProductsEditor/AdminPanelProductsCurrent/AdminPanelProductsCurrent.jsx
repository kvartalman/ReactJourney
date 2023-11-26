import React, {useState} from "react";
import './AdminPanelProductsCurrent.css';
import Dropdown from 'react-bootstrap/Dropdown';

const AdminPanelProductsCurrent = () => {

    return (
        <div id={'adminPanelProductsCurrentMainContainer'}>
            <div id={'adminPanelProductsCurrentTabSettingsContainer'}>
                <Dropdown>
                    <Dropdown.Toggle variant={'success'} id={'adminPanelProductsCurrentChooseGameButton'}>
                        Choose game
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Dota 2</Dropdown.Item>
                        <Dropdown.Item>League of Legends</Dropdown.Item>
                        <Dropdown.Item>Heroes of the Storm</Dropdown.Item>
                        <Dropdown.Item>Counter-Strike 2</Dropdown.Item>
                    </Dropdown.Menu>

                </Dropdown>
            </div>
            <div id={'adminPanelProductsCurrentTabContainer'}>
            </div>
        </div>
    );
}

export default AdminPanelProductsCurrent;
