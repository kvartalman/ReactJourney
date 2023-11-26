import {createSlice} from "@reduxjs/toolkit";


const gameProductsSlice = createSlice({
    name: 'gameProducts',
    initialState: {
        dota2: {
            subCategories: [
                {
                    name: 'Common skins',
                    products: [
                        {
                            id: 0,
                            header: 'Common skin one',
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
                            slider: {
                                min: 0,
                                max: 1000,
                                multiplier: 0.6
                            },
                            sliderType: 'classic'
                        },
                        {
                            id: 1,
                            header: 'Common skin two',
                            text: 'I wrote this text just for test. ' +
                                'This text means nothing and i will add this text to most of text-blocks on website. ' +
                                'However, i should pay attention to the size of text. ' +
                                'I think, size of text should not be too high or too little. ' +
                                'Better to find something people call "golden mean". ' +
                                'Anyway, we will see, how it goes.',
                            checkboxes: [
                                {price: 101, name: 'checkbox1', label: 'Option 1'},
                                {price: 202, name: 'checkbox2', label: 'Option 2'},
                                {price: 303, name: 'checkbox3', label: 'Option 3'},
                                {price: 404, name: 'checkbox4', label: 'Option 4'},
                                {price: 505, name: 'checkbox5', label: 'Option 5'}
                            ],
                            price: 101,
                            img: '/product-photos/doomslayer.jpg',
                            slider: {
                                min: 0,
                                max: 1000,
                                multiplier: 0.6
                            },
                            sliderType: 'classic'
                        }
                    ],
                },
                {
                    name: 'Uncommon skins',
                    products: [
                        {
                            id: 0,
                            header: 'Uncommon skin one',
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
                            sliderType: "complex"
                        }
                    ],
                },
                {
                    name: 'Rare skins',
                    products: [

                    ],
                },
                {
                    name: 'Mythical skins',
                    products: [
                        {
                            id: 0,
                            header: 'Rare skin one',
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
                            img: '/product-photos/doomslayer.jpg',
                            sliderType: 'complex'
                        }
                    ],
                },
                {
                    name: 'Immortal skins',
                    products: [
                        {
                            id: 0,
                            header: 'Immortal skin one',
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
                            slider: {
                                min: 0,
                                max: 1000,
                                multiplier: 1
                            },
                            img: '/product-photos/doomslayer.jpg',
                            sliderType: 'classic'
                        }
                    ],
                },
                {
                    name: 'Arcana',
                    products: [
                        {
                            id: 0,
                            header: 'Arcana one',
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
                            slider: {
                                min: 0,
                                max: 1000,
                                multiplier: 2
                            },
                            img: '/product-photos/doomslayer.jpg',
                            sliderType: "classic",
                        }
                    ]
                },

            ],
        },
        lol: {},
        hots: {}
    },
    reducers: {

    }
})

export default gameProductsSlice.reducer