import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {useDispatch, useSelector} from "react-redux";
import {fillAdvantagesEditorData} from "../../../../store/slices/adminPanelSlices/adminPanelEditorSlice";
import Button from "react-bootstrap/Button";

const AdvantagesEditor = () => {

    const dispatch = useDispatch();

    const advantagesDataSelector = useSelector(state => state.homePage.advData);
    const advantagesEditorDataSelector = useSelector(state => state.adminPanel.advantagesEditorData);

    const [adv, setAdv] = useState(advantagesDataSelector[0]);
    const [advIndex, setAdvIndex] = useState(0);

    const handleAdvButtonSelect = (adv, index) => {
        setAdv(adv);
        setAdvIndex(index);
    }

    const advantagesButtons = () => {
        if (advantagesEditorDataSelector.length > 0) {
            return (
                advantagesEditorDataSelector.map((adv, index) => (
                    <Button
                        className={advIndex === index ? 'activeButton' : 'defaultButton'}
                        onClick={() => handleAdvButtonSelect(adv, index)}
                    >
                        {adv.title}
                    </Button>
                ))
            )
        }
    }

    useEffect(
        () => {
            dispatch(fillAdvantagesEditorData(advantagesDataSelector));
        },
        [])

    return (
        <Container fluid>
            <div>
                {advantagesButtons()}
            </div>
        </Container>
    );
};

export default AdvantagesEditor;