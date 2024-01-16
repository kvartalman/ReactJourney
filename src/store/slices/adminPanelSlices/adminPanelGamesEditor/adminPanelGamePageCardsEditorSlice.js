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
                            title: '',
                            price: ''
                        }
                    }
                ));
            },
            editGamePageCards: (state, action) => {
                const actionType = {
                    add: (actionData) => {
                        state.gamePageCardsEditorData.push(
                            {
                                old: {
                                    id: state.gamePageCardsEditorData.length,
                                    title: actionData.title,
                                    price: actionData.price
                                },
                                new: {
                                    id: state.gamePageCardsEditorData.length,
                                    title: '',
                                    price: ''
                                }
                            }
                        )
                        state.addedGamePageCards.push(
                            {
                                old: {
                                    id: state.gamePageCardsEditorData.length,
                                    title: actionData.title,
                                    price: actionData.price
                                },
                                new: {
                                    id: state.gamePageCardsEditorData.length,
                                    title: '',
                                    price: ''
                                }
                            }
                        )
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
                    cancel: (actionData) => {
                        let removedSubCtg;

                        if (state.deletedGamePageCards.length > 0) {
                            removedSubCtg = state.deletedGamePageCards.pop();
                            state.gamePageCardsEditorData.splice(removedSubCtg.index, 0,
                                {
                                    old: removedSubCtg.old,
                                    new: {
                                        id: removedSubCtg.old.id,
                                        title: '',
                                        price: ''
                                    }
                                }
                            );
                        }
                    },
                    delete: (actionData) => {
                        let removedSubCtg;

                        for (let i = 0; i < state.gamePageCardsEditorData.length; i++) {
                            if (state.gamePageCardsEditorData[i].old.id === actionData.id) {
                                removedSubCtg = {
                                    old: {
                                        ...state.gamePageCardsEditorData[i].old
                                    },
                                    index: i
                                }
                                state.gamePageCardsEditorData = state.gamePageCardsEditorData.filter(subCtg => subCtg.old !== actionData.name);
                                state.deletedGamePageCards.push(removedSubCtg);
                                break;
                            }
                        }
                    },
                    deleteAdded: (actionData) => {
                        if (state.addedGamePageCards.length > 0) {
                            state.gamePageCardsEditorData.pop();
                            state.addedGamePageCards.pop();
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