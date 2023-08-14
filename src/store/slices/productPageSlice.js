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
                        img: '/product-photos/doomslayer.jpg',
                        viewSettings: true
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
                            {price: 100, name: 'checkbox1', label: 'Option 1', tooltip: true, tooltipText: 'Cheliq'},
                            {price: 200, name: 'checkbox2', label: 'Option 2'},
                            {price: 300, name: 'checkbox3', label: 'Option 3'},
                            {price: 400, name: 'checkbox4', label: 'Option 4'},
                            {price: 500, name: 'checkbox5', label: 'Option 5'}
                        ],
                        sliderRangesValues: [
                            {range: [0, 10], value: 2},
                            {range: [10, 20], value: 4},
                            {range: [20, 30], value: 6},
                            {range: [30, 40], value: 8},
                            {range: [40, 50], value: 10},
                            {range: [50, 100], value: 12}
                        ],
                        sliderSettings: {
                            min: 0,
                            max: 100,
                            minValue: 25,
                            maxValue: 75,
                            step: 1
                        },
                        price: 100,
                        img: '/product-photos/doomslayer.jpg',
                        viewSettings: false
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
                        sliderRangesValues: [
                            {range: [0, 10], value: 4},
                            {range: [10, 20], value: 6},
                            {range: [20, 30], value: 8},
                            {range: [30, 40], value: 10},
                            {range: [40, 50], value: 12},
                            {range: [50, 100], value: 14}
                        ],
                        sliderSettings: {
                            min: 0,
                            max: 200,
                            minValue: 50,
                            maxValue: 150,
                            step: 1
                        },
                        price: 100,
                        viewSettings: false
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
                        price: 100,
                        viewSettings: true
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
                        price: 100,
                        viewSettings: true
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
                        price: 100,
                        viewSettings: true
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
                        price: 100,
                        viewSettings: true
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
                        price: 100,
                        viewSettings: true
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
                        price: 100,
                        viewSettings: true
                    }
                }
            }
        },
        reducers: {}
    }
)

export default productPageSlice.reducer