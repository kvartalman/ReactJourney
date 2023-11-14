import {createSlice} from '@reduxjs/toolkit';

const adminPanelNewContentSlice = createSlice({
    name: 'adminPanelNewContent',
    initialState: {
        homePageOfferCards: [],
        homePageAddedOfferCards: [],
        homePageOfferCardsAddedMainButtons: [],
        homePageOfferCardsAddedOrderButtons: [],
    },
    reducers: {
        addHomePageOfferCardsData: (state, action) => {
            state.homePageOfferCards = action.payload;
        },
        addNewHomePageOfferCard: (state, action) => {

            const newCard = {
                id: state.homePageOfferCards.length,
                tagId: action.payload.tagId,
                title: action.payload.title,
                text: action.payload.text,
                bg: action.payload.bg,
                button: []
            };

            state.homePageOfferCards[state.homePageOfferCards.length] = newCard;
            state.homePageAddedOfferCards[state.homePageAddedOfferCards.length] = newCard;
        },
        addHomePageOfferCardsButton: (state, action) => {
            for (let i = 0; i < state.homePageOfferCards.length; i++) {
                if (state.homePageOfferCards[i].tagId === action.payload.activeCard) {

                    const newButton = {
                        id: state.homePageOfferCards[i].button.length,
                        link: action.payload.type === 'mainButton' ? `/categories/${action.payload.game}` :
                            `/categories/${action.payload.game}/${action.payload.link}`,
                        type: action.payload.type,
                        class: action.payload.class,
                        name: action.payload.name
                    }

                    state.homePageOfferCards[i].button[state.homePageOfferCards[i].button.length] = newButton;

                    if (action.payload.type === 'mainButton') {
                        state.homePageOfferCardsAddedMainButtons[state.homePageOfferCardsAddedMainButtons.length] =
                            newButton
                    } else if (action.payload.type === 'button') {
                        state.homePageOfferCardsAddedOrderButtons[state.homePageOfferCardsAddedOrderButtons.length] =
                            newButton
                    }
                }
            }
        },
        cancelHomePageOfferCardsButtonAdding: (state, action) => {
            for (let i = 0; i < state.homePageOfferCards.length; i++) {
                if (state.homePageOfferCards[i].tagId === action.payload.activeCard) {
                    for (let j = 0; j < state.homePageOfferCards[i].button.length; j++) {
                        if (action.payload.type === state.homePageOfferCards[i].button[j].type &&
                            action.payload.name === state.homePageOfferCards[i].button[j].name
                        ) {
                            state.homePageOfferCards[i].button.splice(j, 1);

                        }
                    }
                }
            }

            // We have two arrays in state => with regular buttons (grey) and main buttons (yellow)
            // We use them to have select lists with added buttons. After we delete added button, we need to remove
            // button from one of these lists too

            if (action.payload.type === 'mainButton') {
                state.homePageOfferCardsAddedMainButtons = state.homePageOfferCardsAddedMainButtons.filter(
                    button => button.name !== action.payload.name)
            } else if (action.payload.type === 'button') {
                state.homePageOfferCardsAddedOrderButtons = state.homePageOfferCardsAddedOrderButtons.filter(
                    button => button.name !== action.payload.name)

            }

        },
        cancelHomePageOfferCardAdding: (state, action) => {
            for (let i = 0; i < state.homePageOfferCards.length; i++) {
                if (state.homePageOfferCards[i].title === action.payload) {
                    state.homePageOfferCards.splice(i, 1);
                    state.homePageAddedOfferCards = state.homePageAddedOfferCards.filter(card => card.title !== action.payload);
                }
            }
        }
    }

})

export const {
    addHomePageOfferCardsData,
    addNewHomePageOfferCard,
    addHomePageOfferCardsButton,
    cancelHomePageOfferCardsButtonAdding,
    cancelHomePageOfferCardAdding
} = adminPanelNewContentSlice.actions;
export default adminPanelNewContentSlice.reducer;