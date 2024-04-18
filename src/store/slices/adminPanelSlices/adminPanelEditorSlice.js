import {createSlice} from "@reduxjs/toolkit";
import uuid64 from "uuid64";

const adminPanelEditorSlice = createSlice(
    {
        name: 'adminPanel',
        initialState: {
            linksList: [
                '/', '/dota2', '/lol', '/hots', '/adminPanel'
            ],
            carouselEditorData: [],
            carouselEditorNewData: [],
            carouselNewAddedData: [],
            advantagesEditorData: [],
            advantagesNewAddedData: [],
            stepsEditorData: [],
            contentSliderSettingsRanges: [],
            contentSliderEditorRanges: [],
            checkboxesEditor: [],
            checkboxesEditorDeletedCheckboxes: [],
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

                const carouselArr = []



                for (let i = 0; i < action.payload.length; i++) {
                    // С бэкенда приходят base64 изображения, поэтому приходится делать такие манипуляции

                    const byteCharacters = atob(action.payload[i]['image_data']);
                    const byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    const byteArray = new Uint8Array(byteNumbers);
                    const imageBlob = URL.createObjectURL(new Blob([byteArray], { type: 'image/jpeg' }));

                    const newCarousel = {
                        id: i,
                        srcImg: imageBlob,
                        altImg: action.payload[i]['title'],
                        name: action.payload[i]['title']

                    }

                    carouselArr.push(newCarousel)


                }
                state.carouselEditorData = carouselArr
                state.carouselEditorNewData = carouselArr

            },
            fillCarouselEditorNewData: (state, action) => {
                state.carouselEditorNewData = action.payload;
            },
            changeCarouselEditorData: (state, action) => {

                const actionType = {
                    add: (data) => {
                        state.carouselEditorNewData[state.carouselEditorNewData.length] = {
                            id: state.carouselEditorNewData.length,
                            srcImg: data.src,
                            altImg: data.name,
                            name: data.name
                        }
                        state.carouselNewAddedData[state.carouselNewAddedData.length] = {
                            id: state.carouselEditorNewData.length,
                            srcImg: data.src,
                            altImg: data.name,
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
                        state.carouselEditorData = state.carouselEditorData.filter((image, index) => index !== data.index)
                    },
                    deleteNew: (data) => {
                        if (state.carouselNewAddedData.length > 0) {
                            state.carouselEditorNewData = state.carouselEditorNewData.filter(image => image.name !== data.picture.name)
                            state.carouselNewAddedData = state.carouselNewAddedData.filter(image => image.name !== data.picture.name)
                        }
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

                        state.advantagesNewAddedData[state.advantagesNewAddedData.length] = {
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

                const actionType = {
                    settings: (indexToDelete) => {
                        state.contentSliderSettingsRanges = state.contentSliderSettingsRanges.filter(
                            (range, index) => index !== indexToDelete)
                    },
                    editor: (indexToDelete) => {
                        state.contentSliderEditorRanges = state.contentSliderEditorRanges.filter(
                            (range, index) => index !== indexToDelete)

                    }
                }

                actionType[action.payload.type](indexToRemove);


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
                        state.checkboxesEditorDeletedCheckboxes.push([state.checkboxesEditor[i], i])
                        state.checkboxesEditor = state.checkboxesEditor.filter(elem => elem.name !== action.payload.name);
                    }
                }
            },
            cancelCheckboxContentDeletion: (state, action) => {
                const returnCheckbox = state.checkboxesEditorDeletedCheckboxes.pop();
                state.checkboxesEditor.splice(returnCheckbox[1], 0, returnCheckbox[0]);
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
            fillHomePageOfferCards: (state, action) => {

                const cards_arr = []

                for (let i = 0; i < action.payload.length; i++) {

                    const byteCharacters = atob(action.payload[i]['image_data']);
                    const byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    const byteArray = new Uint8Array(byteNumbers);
                    const imageBlob = URL.createObjectURL(new Blob([byteArray], { type: 'image/jpeg' }));

                    const new_card = {
                        title: action.payload[i]['offer_card']['text'],
                        text: action.payload[i]['offer_card']['title'],
                        bg: imageBlob,
                        button: JSON.parse(action.payload[i]['offer_card']['button']),
                        tagId: action.payload[i]['offer_card']['tagId'],
                        id: action.payload[i]['offer_card']['id'],
                        imgName: action.payload[i]['offer_card']['image_name']
                    }
                    cards_arr.push(new_card)
                }

                state.homePageOfferCards = cards_arr

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
            handleHomePageOfferCardsImageChanges: (state, action) => {

                for (let i = 0; i < state.homePageOfferCards.length; i++) {
                    if (state.homePageOfferCards[i].title === action.payload.title) {
                        state.homePageOfferCards[i].bg = action.payload.bg
                        state.homePageOfferCards[i].imgName = action.payload.imgName
                        break;
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

                if (action.payload.button) {

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
    fillCarouselEditorNewData,
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
    fillHomePageOfferCards,
    handleHomePageOfferCardsChanges,
    handleHomePageOfferCardsButtonChanges,
    handleHomePageOfferCardsImageChanges,
    deleteHomePageOfferCard,
    cancelHomePageOfferCardDeletion,
    deleteHomePageOfferCardButton,
    cancelHomePageOfferCardButtonDeletion,
    cancelCheckboxContentDeletion
} = adminPanelEditorSlice.actions;

export default adminPanelEditorSlice.reducer