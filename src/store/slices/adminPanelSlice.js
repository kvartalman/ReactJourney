import {createSlice} from "@reduxjs/toolkit";

const adminPanelSlice = createSlice(
    {
        name: 'adminPanel',
        initialState: {
            linksList: [
                '/', '/dota2', '/lol', '/hots', '/adminPanel'
            ],
            contentSliderSettingsRanges: [],
            contentSliderEditorRanges: [],
            checkboxesEditor: [],
            gamePageCardsEditor: []
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
                // I tried to use filter instead of splice to prevent auto-F5 when i delete any elem of array except last
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
                            if (action.payload.actionType === 'editName') {
                                state.gamePageCardsEditor[i].title = action.payload.text
                            } else if (action.payload.actionType === 'editPrice') {
                                state.gamePageCardsEditor[i].text = action.payload.text
                            }
                        }
                    }
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
    handleGamePageCardsChanges
} = adminPanelSlice.actions;

export default adminPanelSlice.reducer