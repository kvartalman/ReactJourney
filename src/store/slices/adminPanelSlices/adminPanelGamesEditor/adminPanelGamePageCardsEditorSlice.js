import {createSlice} from "@reduxjs/toolkit";

const adminPanelGamePageCardsEditorSlice = createSlice(
    {
        name: 'gamePageCardsEditor',
        initialState: {
            gamePageCardsEditorData: [],
            addedGamePageCards: [],
            deletedGamePageCards: [],
        },
        reducers: {
            fillGamePageCardsEditorData: (state, action) => {

                state.gamePageCardsEditorData = action.payload.map(card => (
                    {
                        old: {
                            id: card.id,
                            title: card.title,
                            price: card.price
                        },
                        new: {
                            id: card.id,
                            title: card.title,
                            price: card.price
                        }
                    }
                ));
            },
            editGamePageCards: (state, action) => {
                const actionType = {
                    add: (actionData) => {

                        const newCard = {
                            old: '',
                            new: {
                                id: state.gamePageCardsEditorData.length,
                                title: actionData.title,
                                price: actionData.price
                            }
                        }

                        state.gamePageCardsEditorData.push(newCard)
                        state.addedGamePageCards.push(newCard)
                    },
                    edit: (actionData) => {
                        for (let i = 0; i < state.gamePageCardsEditorData.length; i++) {

                            if (state.gamePageCardsEditorData[i].old.id === actionData.id) {

                                state.gamePageCardsEditorData[i] = {
                                    old: {
                                        ...state.gamePageCardsEditorData[i].old
                                    },
                                    new: {
                                        id: actionData.id,
                                        title: actionData.title ? actionData.title : state.gamePageCardsEditorData[i].new.title,
                                        price: actionData.price ? actionData.price : state.gamePageCardsEditorData[i].new.price
                                    }
                                }
                                break;
                            }
                        }
                    },
                    delete: (actionData) => {
                        let removedCard;

                        for (let i = 0; i < state.gamePageCardsEditorData.length; i++) {
                            if (state.gamePageCardsEditorData[i].new.id === actionData.id) {

                                removedCard = {
                                    old: {
                                        ...state.gamePageCardsEditorData[i].old
                                    },
                                    new: {
                                        ...state.gamePageCardsEditorData[i].new
                                    },
                                    index: i
                                }

                                for (let i = 0; i < state.gamePageCardsEditorData.length; i++) {
                                    if (state.gamePageCardsEditorData[i].old.id === actionData.id) {
                                        state.gamePageCardsEditorData[i].new = ''
                                    }
                                }

                                state.deletedGamePageCards.push(removedCard);

                                break;
                            }
                        }
                    },
                    deleteAdded: (actionData) => {
                        if (state.addedGamePageCards.length > 0) {
                            state.gamePageCardsEditorData.pop();
                            state.addedGamePageCards.pop();
                        }
                    },
                    cancel: (actionData) => {
                        let removedCard;

                        if (state.deletedGamePageCards.length > 0) {
                            removedCard = state.deletedGamePageCards.pop();

                            for (let i = 0; i < state.gamePageCardsEditorData.length; i++) {
                                if (i === removedCard.index) {
                                    state.gamePageCardsEditorData[i].new = removedCard.new
                                }
                            }
                        }
                    }
                };

                actionType[action.payload.type](action.payload);
            }
        },
    }
)


export const {
    fillGamePageCardsEditorData,
    editGamePageCards
} = adminPanelGamePageCardsEditorSlice.actions;

export default adminPanelGamePageCardsEditorSlice.reducer;