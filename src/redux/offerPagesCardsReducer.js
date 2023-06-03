const offerPageAddCard = 'OFFERPAGE-ADD-CARD';

const offerPagesCardsReducer = (state, action) => {

    switch (action.type) {

        case offerPageAddCard:
            let newOfferPageCard = {
                id: state[0][action.gameOfferSelector].offerCardsData.length,
                title: state[1].cardTitleForm,
                text: state[1].cardTextForm
            }

            state[0][action.gameOfferSelector].offerCardsData.push(newOfferPageCard);
            state[1].cardTitleForm = '';
            state[1].cardTextForm = '';
            break

        default:
            return state;

    }

    return state;
}

export const offerPageCardsActionCreator = (gameOfferSelector) =>
    ({
        type: offerPageAddCard,
        gameOfferSelector: gameOfferSelector
    })

export default offerPagesCardsReducer