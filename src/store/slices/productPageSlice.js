import {createSlice} from "@reduxjs/toolkit";


const productPageSlice = createSlice({
        name: 'productPage',
        initialState: {
            breadCrumbsData: {
                dota2: ['Dota 2', '/categories/dota2'],
                lol: ['League of Legends', '/categories/lol'],
                hots: ['Heroes of the Storm', '/categories/hots']
            },
            productData: {
                dota2: {
                    commonSkins: {
                        id: 0,
                        header: 'Common skins',
                        text: 'I wrote this text just for test. ' +
                            'This text means nothing and i will add this text to most of text-blocks on website. ' +
                            'However, i should pay attention to the size of text. ' +
                            'I think, size of text should not be too high or too little. ' +
                            'Better to find something people call "golden mean". ' +
                            'Anyway, we will see, how it goes.',
                        checkboxes: [
                            {price: 100, name: 'checkbox1', label: 'Option 1'},
                            {price: 200, name: 'checkbox2', label: 'Option 2'},
                            {price: 300, name: 'checkbox3', label: 'Option 3'},
                            {price: 400, name: 'checkbox4', label: 'Option 4'},
                            {price: 500, name: 'checkbox5', label: 'Option 5'}
                        ],
                        price: 100,
                        img: './product-photos/doomslayer.jpg'
                    },
                    uncommonSkins: {
                        id: 1,
                        header: 'Uncommon skins',
                        text: 'I wrote this text just for test. ' +
                            'This text means nothing and i will add this text to most of text-blocks on website. ' +
                            'However, i should pay attention to the size of text. ' +
                            'I think, size of text should not be too high or too little. ' +
                            'Better to find something people call "golden mean". ' +
                            'Anyway, we will see, how it goes.',
                        checkboxes: [
                            {price: 100, name: 'checkbox1', label: 'Option 1'},
                            {price: 200, name: 'checkbox2', label: 'Option 2'},
                            {price: 300, name: 'checkbox3', label: 'Option 3'},
                            {price: 400, name: 'checkbox4', label: 'Option 4'},
                            {price: 500, name: 'checkbox5', label: 'Option 5'}
                        ],
                        price: 100
                    },
                    rareSkins: {
                        id: 2,
                        header: 'Rare skins',
                        text: 'I wrote this text just for test. ' +
                            'This text means nothing and i will add this text to most of text-blocks on website. ' +
                            'However, i should pay attention to the size of text. ' +
                            'I think, size of text should not be too high or too little. ' +
                            'Better to find something people call "golden mean". ' +
                            'Anyway, we will see, how it goes.',
                        checkboxes: [
                            {price: 100, name: 'checkbox1', label: 'Option 1'},
                            {price: 200, name: 'checkbox2', label: 'Option 2'},
                            {price: 300, name: 'checkbox3', label: 'Option 3'},
                            {price: 400, name: 'checkbox4', label: 'Option 4'},
                            {price: 500, name: 'checkbox5', label: 'Option 5'}
                        ],
                        price: 100
                    },
                    immortalSkins: {
                        id: 3,
                        header: 'Immortal skins',
                        text: 'I wrote this text just for test. ' +
                            'This text means nothing and i will add this text to most of text-blocks on website. ' +
                            'However, i should pay attention to the size of text. ' +
                            'I think, size of text should not be too high or too little. ' +
                            'Better to find something people call "golden mean". ' +
                            'Anyway, we will see, how it goes.',
                        checkboxes: [
                            {price: 100, name: 'checkbox1', label: 'Option 1'},
                            {price: 200, name: 'checkbox2', label: 'Option 2'},
                            {price: 300, name: 'checkbox3', label: 'Option 3'},
                            {price: 400, name: 'checkbox4', label: 'Option 4'},
                            {price: 500, name: 'checkbox5', label: 'Option 5'}
                        ],
                        price: 100
                    },
                    arcana: {
                        id: 4,
                        header: 'Arcana',
                        text: 'I wrote this text just for test. ' +
                            'This text means nothing and i will add this text to most of text-blocks on website. ' +
                            'However, i should pay attention to the size of text. ' +
                            'I think, size of text should not be too high or too little. ' +
                            'Better to find something people call "golden mean". ' +
                            'Anyway, we will see, how it goes.',
                        checkboxes: [
                            {price: 100, name: 'checkbox1', label: 'Option 1'},
                            {price: 200, name: 'checkbox2', label: 'Option 2'},
                            {price: 300, name: 'checkbox3', label: 'Option 3'},
                            {price: 400, name: 'checkbox4', label: 'Option 4'},
                            {price: 500, name: 'checkbox5', label: 'Option 5'}
                        ],
                        price: 100
                    },
                    mmrBoost: {
                        id: 5,
                        header: 'MMR Boost',
                        text: 'I wrote this text just for test. ' +
                            'This text means nothing and i will add this text to most of text-blocks on website. ' +
                            'However, i should pay attention to the size of text. ' +
                            'I think, size of text should not be too high or too little. ' +
                            'Better to find something people call "golden mean". ' +
                            'Anyway, we will see, how it goes.',
                        checkboxes: [
                            {price: 100, name: 'checkbox1', label: 'Option 1'},
                            {price: 200, name: 'checkbox2', label: 'Option 2'},
                            {price: 300, name: 'checkbox3', label: 'Option 3'},
                            {price: 400, name: 'checkbox4', label: 'Option 4'},
                            {price: 500, name: 'checkbox5', label: 'Option 5'}
                        ],
                        price: 100
                    },
                    lowPriority: {
                        id: 6,
                        header: 'Low priority',
                        text: 'I wrote this text just for test. ' +
                            'This text means nothing and i will add this text to most of text-blocks on website. ' +
                            'However, i should pay attention to the size of text. ' +
                            'I think, size of text should not be too high or too little. ' +
                            'Better to find something people call "golden mean". ' +
                            'Anyway, we will see, how it goes.',
                        checkboxes: [
                            {price: 100, name: 'checkbox1', label: 'Option 1'},
                            {price: 200, name: 'checkbox2', label: 'Option 2'},
                            {price: 300, name: 'checkbox3', label: 'Option 3'},
                            {price: 400, name: 'checkbox4', label: 'Option 4'},
                            {price: 500, name: 'checkbox5', label: 'Option 5'}
                        ],
                        price: 100
                    },
                    coaching: {
                        id: 7,
                        header: 'Coaching',
                        text: 'I wrote this text just for test. ' +
                            'This text means nothing and i will add this text to most of text-blocks on website. ' +
                            'However, i should pay attention to the size of text. ' +
                            'I think, size of text should not be too high or too little. ' +
                            'Better to find something people call "golden mean". ' +
                            'Anyway, we will see, how it goes.',
                        checkboxes: [
                            {price: 100, name: 'checkbox1', label: 'Option 1'},
                            {price: 200, name: 'checkbox2', label: 'Option 2'},
                            {price: 300, name: 'checkbox3', label: 'Option 3'},
                            {price: 400, name: 'checkbox4', label: 'Option 4'},
                            {price: 500, name: 'checkbox5', label: 'Option 5'}
                        ],
                        price: 100
                    },
                    partyWithAPro: {
                        id: 8,
                        header: 'Party with a pro',
                        text: 'I wrote this text just for test. ' +
                            'This text means nothing and i will add this text to most of text-blocks on website. ' +
                            'However, i should pay attention to the size of text. ' +
                            'I think, size of text should not be too high or too little. ' +
                            'Better to find something people call "golden mean". ' +
                            'Anyway, we will see, how it goes.',
                        checkboxes: [
                            {price: 100, name: 'checkbox1', label: 'Option 1'},
                            {price: 200, name: 'checkbox2', label: 'Option 2'},
                            {price: 300, name: 'checkbox3', label: 'Option 3'},
                            {price: 400, name: 'checkbox4', label: 'Option 4'},
                            {price: 500, name: 'checkbox5', label: 'Option 5'}
                        ],
                        price: 100
                    }
                }
            }
        },
        reducers: {}
    }
)

export default productPageSlice.reducer