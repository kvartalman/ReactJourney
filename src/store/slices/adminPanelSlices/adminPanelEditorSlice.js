import {createSlice} from "@reduxjs/toolkit";

const adminPanelEditorSlice = createSlice(
    {
        name: 'adminPanel',
        initialState: {
            linksList: [
                '/', '/dota2', '/lol', '/hots', '/adminPanel'
            ],
            contentSliderSettingsRanges: [],
            contentSliderEditorRanges: [],
            checkboxesEditor: [],
            gamePageCardsEditor: [],
            deletedGamePageCards: [],
            subCategoriesCardsEditor: [],
            deletedSubCategoriesCards: []
        },
        reducers: {
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
            }
        }
    }
)


export const {
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
    cancelSubCategoriesCardDeletion
} = adminPanelEditorSlice.actions;

export default adminPanelEditorSlice.reducer