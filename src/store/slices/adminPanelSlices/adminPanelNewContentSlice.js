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

            const cardsArr = []

            for (let i = 0; i < action.payload.length; i++) {

                // С бэкенда приходят base64 изображения, поэтому приходится делать такие манипуляции

                const byteCharacters = atob(action.payload[i]['image_data']);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                const imageBlob = URL.createObjectURL(new Blob([byteArray], { type: 'image/jpeg' }));

                const new_card = {
                    title: action.payload[i]['offer_card']['text'],
                    text:action.payload[i]['offer_card']['title'],
                    bg: imageBlob,
                    button: JSON.parse(action.payload[i]['offer_card']['button']),
                    tagId: action.payload[i]['offer_card']['tagId'],
                    id: action.payload[i]['offer_card']['id'],
                    imgName: action.payload[i]['offer_card']['image_name'],
                }

                cardsArr.push(new_card)

                state.homePageOfferCards = cardsArr
        }
        },
        addNewHomePageOfferCard: (state, action) => {

            const newCard = {
                id: state.homePageOfferCards.length,
                tagId: action.payload.tagId,
                title: action.payload.title,
                text: action.payload.text,
                bg: action.payload.bg,
                button: [],
                imgName: action.payload.imgName
            };

            state.homePageOfferCards[state.homePageOfferCards.length] = newCard;
            state.homePageAddedOfferCards[state.homePageAddedOfferCards.length] = newCard;
        },
        addHomePageOfferCardsButton: (state, action) => {

            let activeCardIndex;
            let activeAddedCardIndex = null;

            for (let i = 0; i < state.homePageOfferCards.length; i++) {
                if (state.homePageOfferCards[i].title === action.payload.activeCard.title) {

                    activeCardIndex = i;
                }
            }

            for (let i = 0; i < state.homePageAddedOfferCards.length; i++) {
                if (state.homePageAddedOfferCards[i].title === action.payload.activeCard.title) {
                    activeAddedCardIndex = i;
                }
            }

            const buttonActions = {
                mainButton: () => {
                    if (state.homePageOfferCards[activeCardIndex].button.length > 0) {
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
                        } else if (state.homePageOfferCards[activeCardIndex].button[0].type === 'mainButton') {
                            state.homePageOfferCards[activeCardIndex].button.splice(0, 1, {
                                    id: 0,
                                    link: action.payload.link,
                                    type: action.payload.type,
                                    class: action.payload.class,
                                    name: action.payload.name
                                }
                            )
                        }
                    } else if (state.homePageOfferCards[activeCardIndex].button.length === 0) {
                        state.homePageOfferCards[activeCardIndex].button.push(
                            {
                                id: 0,
                                link: action.payload.link,
                                type: action.payload.type,
                                class: action.payload.class,
                                name: action.payload.name
                            }
                        )
                    }
                    // Добавляем карточку в редактируемый массив добавленных карточек
                    if (activeAddedCardIndex !== null) {
                        if (state.homePageAddedOfferCards[activeAddedCardIndex].button.length > 0) {
                            if (state.homePageAddedOfferCards[activeAddedCardIndex].button[0].type !== 'mainButton') {

                            } else if (state.homePageAddedOfferCards[activeAddedCardIndex].button[0].type === 'mainButton') {
                                state.homePageAddedOfferCards[activeAddedCardIndex].button.unshift(
                                    {
                                        id: 0,
                                        link: action.payload.link,
                                        type: action.payload.type,
                                        class: action.payload.class,
                                        name: action.payload.name
                                    }
                                )
                            }
                        } else if (state.homePageAddedOfferCards[activeAddedCardIndex].button.length === 0) {
                            state.homePageAddedOfferCards[activeAddedCardIndex].button.splice(0, 1, {
                                    id: 0,
                                    link: action.payload.link,
                                    type: action.payload.type,
                                    class: action.payload.class,
                                    name: action.payload.name
                                }
                            )
                        }
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

                    if (activeAddedCardIndex !== null) {
                        state.homePageAddedOfferCards[activeAddedCardIndex].button.push(
                            {
                                id: state.homePageOfferCards[activeAddedCardIndex].button.length,
                                link: action.payload.link,
                                type: action.payload.type,
                                class: action.payload.class,
                                name: action.payload.name
                            }
                        )
                    }
                }
            }

            buttonActions[action.payload.type]();
        },
        cancelHomePageOfferCardsButtonAdding: (state, action) => {

            let activeCardIndex;
            let activeAddedCardIndex = null;

            for (let i = 0; i < state.homePageOfferCards.length; i++) {
                if (state.homePageOfferCards[i].title === action.payload.activeCard.title) {

                    activeCardIndex = i;
                }
            }

            for (let i = 0; i < state.homePageAddedOfferCards.length; i++) {
                if (state.homePageAddedOfferCards[i].title === action.payload.activeCard.title) {
                    activeAddedCardIndex = i;
                }
            }

            const buttonActions = {
                mainButton: () => {
                    state.homePageOfferCards[activeCardIndex].button = state.homePageOfferCards
                        [activeCardIndex].button.filter(button => button.type !== 'mainButton');

                    if (state.homePageAddedOfferCards.length > 0) {
                        state.homePageAddedOfferCards[activeAddedCardIndex].button =
                            state.homePageAddedOfferCards[activeAddedCardIndex].button
                                .filter(button => button.type !== 'mainButton');
                    }
                },
                button: () => {
                    state.homePageOfferCards[activeCardIndex].button = state.homePageOfferCards
                        [activeCardIndex].button.filter(button => button.name !== action.payload.name);
                    state.homePageOfferCardsAddedOrderButtons = state.homePageOfferCardsAddedOrderButtons
                        .filter(button => button.name !== action.payload.name);

                    if (activeAddedCardIndex !== null) {
                        state.homePageAddedOfferCards[activeAddedCardIndex].button = state.homePageAddedOfferCards
                        [activeAddedCardIndex].button.filter(button => button.name !== action.payload.name)
                    }
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