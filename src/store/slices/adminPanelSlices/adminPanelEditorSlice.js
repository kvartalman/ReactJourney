import {createSlice} from "@reduxjs/toolkit";

const adminPanelEditorSlice = createSlice(
    {
        name: 'adminPanel',
        initialState: {
            linksList: [
                '/', '/dota2', '/lol', '/hots', '/adminPanel'
            ],
            carouselEditorData: [],
            advantagesEditorData: [],
            stepsEditorData: [],
            contentSliderSettingsRanges: [],
            contentSliderEditorRanges: [],
            checkboxesEditor: [],
            gamePageCardsEditor: [],
            deletedGamePageCards: [],
            subCategoriesCardsEditor: [],
            deletedSubCategoriesCards: [],
            homePageOfferCards: [],
            deletedHomePageOfferCards: [],
            deletedHomePageOfferCardsButtons: []
        },
        reducers: {
            fillCarouselEditorData: (state, action) => {
                state.carouselEditorData = action.payload;
            },
            changeCarouselEditorData: (state, action) => {

                const actionType = {
                    add: (data) => {
                        state.carouselEditorData[state.carouselEditorData.length] = {
                            id: state.carouselEditorData.length,
                            srcImg: data.src,
                            altImg: data.name,
                            text: "ОТФОТОШОПЛЕННАЯ В СТИЛЕ САЙТА ПИКЧА С ОФФЕРОМ",
                            name: data.name
                        }
                    },
                    replace: (data) => {
                        if (state.carouselEditorData.length > data.index) {
                            state.carouselEditorData[data.index] = {
                                id: data.index,
                                srcImg: data.src,
                                altImg: data.name,
                                text: "ОТФОТОШОПЛЕННАЯ В СТИЛЕ САЙТА ПИКЧА С ОФФЕРОМ",
                                name: data.name
                            }
                        }
                    },
                    delete: (data) => {
                        state.carouselEditorData = state.carouselEditorData.filter((card, index) => index !== data.index)
                    }
                }

                actionType[action.payload.actionType](action.payload);

            },
            fillAdvantagesEditorData: (state, action) => {
                state.advantagesEditorData = action.payload;
            },
            handleAdvantagesEditorDataChanges: (state, action) => {

                const actionType = {
                    add: () => {
                        state.advantagesEditorData[state.advantagesEditorData.length] = {
                            id: state.advantagesEditorData.length,
                            img: action.payload.imgSrc,
                            title: action.payload.title,
                            text: action.payload.text
                        }
                    },
                    replace: () => {
                        if (state.advantagesEditorData.length > 0) {
                            state.advantagesEditorData[action.payload.index] = {
                                id: state.advantagesEditorData[action.payload.index].id,
                                img: action.payload.imgSrc,
                                title: action.payload.title,
                                text: action.payload.text
                            }
                        }
                    },
                    delete: () => {
                        state.advantagesEditorData = state.advantagesEditorData.filter((adv, index) => index !== action.payload.index)
                    }
                };

                actionType[action.payload.actionType]();
            },
            fillStepsEditorData: (state, action) => {
                state.stepsEditorData = action.payload;
            },
            handleStepsEditorDataChanges: (state, action) => {
            },
            addContentSliderRange: (state, action) => {
                const newRange = {
                    range: [action.payload.enterStartOfRange, action.payload.enterEndOfRange],
                    value: action.payload.enterValuePerStep
                };
                // If we create new Content Slider, we use 'settings' type.
                // If we want to edit current Content Slider, we use 'editor' type.
                action.payload.type === 'settings' ?
                    state.contentSliderSettingsRanges.push(newRange)
                    :
                    state.contentSliderEditorRanges.push(newRange)
            },
            deleteContentSliderRange: (state, action) => {
                const indexToRemove = action.payload.index;
                // I tried to use filter instead of splice to prevent auto-F5 when i delete any elem of array except last,
                // but it doesn't work
                action.payload.type === 'settings' ?
                    state.contentSliderSettingsRanges = state.contentSliderSettingsRanges.filter(
                        (_, index) => index !== indexToRemove)
                    :
                    state.contentSliderEditorRanges = state.contentSliderEditorRanges.filter(
                        (_, index) => index !== indexToRemove)
            },
            fillContentSliderEditorRanges: (state, action) => {
                state.contentSliderEditorRanges = action.payload;
            },
            fillCheckboxesEditor: (state, action) => {
                state.checkboxesEditor = action.payload;
            },
            editCheckboxesContent: (state, action) => {
                for (let i = 0; i < state.checkboxesEditor.length; i++) {
                    if (state.checkboxesEditor[i].name === action.payload.name) {
                        if (action.payload.value) {
                            state.checkboxesEditor[i].price = action.payload.value
                        }
                        if (action.payload.label) {
                            state.checkboxesEditor[i].label = action.payload.label
                        }
                    }
                }
            },
            deleteCheckboxContent: (state, action) => {
                for (let i = 0; i < state.checkboxesEditor.length; i++) {
                    if (state.checkboxesEditor[i].name === action.payload.name) {
                        state.checkboxesEditor.splice(i, 1);
                    }
                }
            },
            editTooltip: (state, action) => {
                if (action.payload.actionType === 'add') {
                    for (let i = 0; i < state.checkboxesEditor.length; i++) {
                        if (state.checkboxesEditor[i].name === action.payload.name) {
                            state.checkboxesEditor[i].tooltip = true
                            state.checkboxesEditor[i].tooltipText = action.payload.tooltipText
                        }
                    }
                } else if (action.payload.actionType === 'delete') {
                    for (let i = 0; i < state.checkboxesEditor.length; i++) {
                        if (state.checkboxesEditor[i].name === action.payload.name) {
                            delete state.checkboxesEditor[i].tooltip
                            delete state.checkboxesEditor[i].tooltipText
                        }
                    }
                } else if (action.payload.actionType === 'edit') {
                    for (let i = 0; i < state.checkboxesEditor.length; i++) {
                        if (state.checkboxesEditor[i].name === action.payload.name) {
                            state.checkboxesEditor[i].tooltipText = action.payload.tooltipText
                        }
                    }
                }
            },
            fillGamePageCardsEditor: (state, action) => {
                state.gamePageCardsEditor = action.payload;
                state.deletedGamePageCards.length = 0;
            },
            handleGamePageCardsChanges: (state, action) => {
                for (let i = 0; i < state.gamePageCardsEditor.length; i++) {
                    if (state.gamePageCardsEditor[i].title === action.payload.name) {
                        state.gamePageCardsEditor[i].title = action.payload.title
                        state.gamePageCardsEditor[i].text = action.payload.text
                    }
                }
            },
            deleteGamePageCards: (state, action) => {
                for (let i = 0; i < state.gamePageCardsEditor.length; i++) {
                    if (state.gamePageCardsEditor[i].title === action.payload.name) {
                        const deletedCard = state.gamePageCardsEditor[i];
                        state.gamePageCardsEditor.splice(i, 1);
                        state.deletedGamePageCards.push({card: deletedCard, index: i});
                    }
                }
            },
            cancelGamePageCardDeletion: (state, action) => {
                const returnedCard = state.deletedGamePageCards.pop()
                state.gamePageCardsEditor.splice(returnedCard.index, 0, returnedCard.card);
            },
            fillSubCategoriesEditor: (state, action) => {

                // We clear state.deletedSubCategoriesCards because, when first render starts, we fill subCategoriesCardsEditor
                // and it means we don't have any deleted cards.

                state.subCategoriesCardsEditor = action.payload;
                state.deletedSubCategoriesCards = [];
            },
            handleSubCategoriesChanges: (state, action) => {
                for (let i = 0; i < state.subCategoriesCardsEditor.length; i++) {
                    if (state.subCategoriesCardsEditor[i].title === action.payload.card) {
                        state.subCategoriesCardsEditor[i].title = action.payload.title;
                        state.subCategoriesCardsEditor[i].text = action.payload.text;
                        state.subCategoriesCardsEditor[i].src = action.payload.src;
                    }
                }
            },
            deleteSubCategoriesCard: (state, action) => {
                for (let i = 0; i < state.subCategoriesCardsEditor.length; i++) {
                    if (state.subCategoriesCardsEditor[i].title === action.payload.name) {
                        const deletedCard = state.subCategoriesCardsEditor[i];
                        state.subCategoriesCardsEditor.splice(i, 1);
                        state.deletedSubCategoriesCards.push({card: deletedCard, index: i});
                    }
                }
            },
            cancelSubCategoriesCardDeletion: (state, action) => {

                // We take last element from array by using .pop() and put it inside 'subCategoriesCardsEditor' array.
                // We also use index at which this element was located in 'subCategoriesCardsEditor' array.
                // We do it, when we removed one or more cards from 'subCategoriesCardsEditor' array and want to cancel
                // our decision. 'deletedSubCategoriesCards' array consists information about deleted cards.
                const returnedCard = state.deletedSubCategoriesCards.pop()
                state.subCategoriesCardsEditor.splice(returnedCard.index, 0, returnedCard.card);
            },
            fillHomePageOfferCards: (state, action) => {
                state.homePageOfferCards = action.payload;
                state.deletedHomePageOfferCards = [];
            },
            handleHomePageOfferCardsChanges: (state, action) => {
                for (let i = 0; i < state.homePageOfferCards.length; i++) {
                    if (state.homePageOfferCards[i].tagId === action.payload.card.tagId) {
                        state.homePageOfferCards[i].title = action.payload.title;
                        state.homePageOfferCards[i].text = action.payload.text;
                    }
                }
            },
            handleHomePageOfferCardsButtonChanges: (state, action) => {
                for (let i = 0; i < state.homePageOfferCards.length; i++) {
                    if (state.homePageOfferCards[i].title === action.payload.card.title) {
                        for (let j = 0; j < state.homePageOfferCards[i].button.length; j++) {
                            if (state.homePageOfferCards[i].button[j].name === action.payload.button.name) {
                                state.homePageOfferCards[i].button[j].name = action.payload.text
                            }
                        }
                    }
                }
            },
            deleteHomePageOfferCard: (state, action) => {

                const deletedCard = state.homePageOfferCards[action.payload.activeCardIndex];
                state.homePageOfferCards.splice(action.payload.activeCardIndex, 1);
                state.deletedHomePageOfferCards.push({card: deletedCard, index: action.payload.activeCardIndex});

            },
            cancelHomePageOfferCardDeletion: (state, action) => {
                const returnedCard = state.deletedHomePageOfferCards.pop()
                state.homePageOfferCards.splice(returnedCard.index, 0, returnedCard.card);
            },
            deleteHomePageOfferCardButton: (state, action) => {

                const wantedCard = state.homePageOfferCards[action.payload.activeCardIndex]

                for (let i = 0; i < wantedCard.button.length; i++) {
                    if (wantedCard.button[i].name === action.payload.button.name) {
                        const deletedButton = wantedCard.button[i];
                        state.homePageOfferCards[action.payload.activeCardIndex].button.splice(i, 1);
                        state.deletedHomePageOfferCardsButtons.push(
                            {
                                button: deletedButton,
                                index: i,
                                cardName: wantedCard.title
                            }
                        )
                    }
                }
            },
            cancelHomePageOfferCardButtonDeletion: (state, action) => {
                const returnedButton = state.deletedHomePageOfferCardsButtons.pop()
                for (let i = 0; i < state.homePageOfferCards.length; i++) {
                    if (state.homePageOfferCards[i].title === returnedButton.cardName) {
                        state.homePageOfferCards[i].button.splice(returnedButton.index, 0, returnedButton.button);
                    }
                }
            }
        }
    }
)


export const {
    fillCarouselEditorData,
    fillAdvantagesEditorData,
    handleAdvantagesEditorDataChanges,
    fillStepsEditorData,
    handleStepsEditorDataChanges,
    changeCarouselEditorData,
    addContentSliderRange,
    deleteContentSliderRange,
    fillContentSliderEditorRanges,
    fillCheckboxesEditor,
    editCheckboxesContent,
    deleteCheckboxContent,
    editTooltip,
    fillGamePageCardsEditor,
    handleGamePageCardsChanges,
    deleteGamePageCards,
    cancelGamePageCardDeletion,
    fillSubCategoriesEditor,
    handleSubCategoriesChanges,
    deleteSubCategoriesCard,
    cancelSubCategoriesCardDeletion,
    fillHomePageOfferCards,
    handleHomePageOfferCardsChanges,
    handleHomePageOfferCardsButtonChanges,
    deleteHomePageOfferCard,
    cancelHomePageOfferCardDeletion,
    deleteHomePageOfferCardButton,
    cancelHomePageOfferCardButtonDeletion
} = adminPanelEditorSlice.actions;

export default adminPanelEditorSlice.reducer