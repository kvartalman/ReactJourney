const adminUpdateForms = 'UPDATE-ADMIN-EDITOR-FORMS';

const adminPanelFormsReducer = (state, action) => {

    switch (action.type) {

        case adminUpdateForms:
            if (action.formName === 'cardId') {
                state.homePageCards.cardIdForm = action.text;
            } else if (action.formName === 'cardTitle') {
                state.homePageCards.cardTitleForm = action.text;
            } else if (action.formName === 'cardText') {
                state.homePageCards.cardTextForm = action.text;
            } else if (action.formName === 'buttonName') {
                state.homePageCards.buttonNameForm = action.text;
            } else if (action.formName === 'offerPageCardTitle') {
                state.offerPageCards.cardTitleForm = action.text;
            } else if (action.formName === 'offerPageCardText') {
                state.offerPageCards.cardTextForm = action.text;
            }
            break

        default:
            return state;
    }

    return state;
}

export const adminPanelOnChangeActionCreator = (text, formName) =>
    ({
        type: adminUpdateForms,
        text: text,
        formName: formName
    })

export default adminPanelFormsReducer