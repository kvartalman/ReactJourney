import {createSlice} from '@reduxjs/toolkit';

const adminPanelNewContentSlice = createSlice({
    name: 'adminPanelNewContent',
    initialState: {
        homePageOfferCards: [],
        homePageAddedOfferCards: [],
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

            let activeCardIndex;

            for (let i = 0; i < state.homePageOfferCards.length; i++) {
                if (state.homePageOfferCards[i].title === action.payload.activeCard.title) {

                    activeCardIndex = i;
                }
            }

            const buttonActions = {
                mainButton: () => {
                    if (state.homePageOfferCards[activeCardIndex].button[0].type !== 'mainButton') {
                        state.homePageOfferCards[activeCardIndex].button.unshift(
                            {
                                id: 0,
                                link: action.payload.link,
                                type: action.payload.type,
                                class: action.payload.class,
                                name: action.payload.name
                            }
                        )
                    }
                },
                button: () => {
                    state.homePageOfferCards[activeCardIndex].button.push(
                        {
                            id: state.homePageOfferCards[activeCardIndex].button.length,
                            link: action.payload.link,
                            type: action.payload.type,
                            class: action.payload.class,
                            name: action.payload.name
                        }
                    );
                    state.homePageOfferCardsAddedOrderButtons.push(
                        {
                            id: state.homePageOfferCards[activeCardIndex].button.length,
                            link: action.payload.link,
                            type: action.payload.type,
                            class: action.payload.class,
                            name: action.payload.name
                        }
                    );
                }
            }

            buttonActions[action.payload.type]();
        },
        cancelHomePageOfferCardsButtonAdding: (state, action) => {

            let activeCardIndex;

            for (let i = 0; i < state.homePageOfferCards.length; i++) {
                if (state.homePageOfferCards[i].title === action.payload.activeCard.title) {

                    activeCardIndex = i;
                }
            }

            const buttonActions = {
                mainButton: () => {
                    state.homePageOfferCards[activeCardIndex].button = state.homePageOfferCards
                        [activeCardIndex].button.filter(button => button.type !== 'mainButton');
                },
                button: () => {
                    state.homePageOfferCards[activeCardIndex].button = state.homePageOfferCards
                        [activeCardIndex].button.filter(button => button.name !== action.payload.name);
                    state.homePageOfferCardsAddedOrderButtons = state.homePageOfferCardsAddedOrderButtons
                        .filter(button => button.name !== action.payload.name);
                }
            }

            buttonActions[action.payload.type]();
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