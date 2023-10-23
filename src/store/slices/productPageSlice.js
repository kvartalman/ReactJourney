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
                    products: {
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
                            slider: {
                                min: 0,
                                max: 1000,
                                multiplier: 0.6
                            },
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
                            slider: {
                                min: 0,
                                max: 1000,
                                multiplier: 1
                            },
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
                            slider: {
                                min: 0,
                                max: 1000,
                                multiplier: 2
                            },
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
                            slider: {
                                min: 0,
                                max: 1000,
                                multiplier: 0.7
                            },
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
                            slider: {
                                min: 0,
                                max: 1000,
                                multiplier: 0.5
                            },
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
                            slider: {
                                min: 0,
                                max: 1000,
                                multiplier: 0.4
                            },
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
                            slider: {
                                min: 0,
                                max: 500,
                                multiplier: 3
                            },
                            viewSettings: true
                        },
                    },
                    subCategories: {
                        rampageCollection: {
                            header: "Rampage collection",
                            subCategory: true,
                            cards: {
                                rampageOne: {
                                    link: "/categories/dota2/rampage-one",
                                    title: "Rampage one",
                                    text: "Let's make a rampage number one!",
                                    src: "/subcategories-photos/awp.jpg"
                                },
                                rampageTwo: {
                                    link: "/categories/dota2/rampage-two",
                                    title: "Rampage two",
                                    text: "Let's make a rampage number two!",
                                    src: "/subcategories-photos/awp.jpg"
                                },
                                uncommonSkins: {
                                    link: "/categories/dota2/uncommon-skins",
                                    title: "Uncommon skins",
                                    text: "Let's see what the uncommon skins you have!",
                                    src: "/subcategories-photos/awp.jpg"
                                }
                            }
                        },
                        accountBoost: {
                            header: "Account boost",
                            subCategory: true,
                            cards: {
                                rampageOne: {
                                    link: "/categories/dota2/rampage-one",
                                    title: "Boost one",
                                    text: "Let's make a rampage number one!",
                                    src: "/subcategories-photos/awp.jpg"
                                },
                                rampageTwo: {
                                    link: "/categories/dota2/rampage-two",
                                    title: "Boost two",
                                    text: "Let's make a rampage number two!",
                                    src: "/subcategories-photos/awp.jpg"
                                },
                                uncommonSkins: {
                                    link: "/categories/dota2/uncommon-skins",
                                    title: "Boost three",
                                    text: "Let's see what the uncommon skins you have!",
                                    src: "/subcategories-photos/awp.jpg"
                                }
                            }
                        }
                    },
                    fullName: 'Dota 2'
                },
                hots: {
                    products: {
                        lowPriority: {
                            id: 2,
                            header: 'Low Priority',
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
                                {range: [0, 10], value: 10},
                                {range: [10, 20], value: 20},
                                {range: [20, 30], value: 30},
                                {range: [30, 40], value: 40},
                                {range: [40, 50], value: 50},
                                {range: [50, 100], value: 60}
                            ],
                            sliderSettings: {
                                min: 0,
                                max: 300,
                                minValue: 20,
                                maxValue: 200,
                                step: 1
                            },
                            price: 100,
                            viewSettings: false
                        },
                        leveling: {
                            id: 3,
                            header: 'Leveling',
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
                                {range: [0, 10], value: 5},
                                {range: [10, 20], value: 10},
                                {range: [20, 30], value: 15},
                                {range: [30, 40], value: 20},
                                {range: [40, 50], value: 25},
                                {range: [50, 100], value: 30}
                            ],
                            sliderSettings: {
                                min: 0,
                                max: 180,
                                minValue: 10,
                                maxValue: 90,
                                step: 1
                            },
                            price: 100,
                            viewSettings: false
                        },
                        coaching: {
                            id: 3,
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
                            slider: {
                                min: 0,
                                max: 10000,
                                multiplier: 0.2
                            },
                            viewSettings: true
                        },
                        ranked: {
                            id: 3,
                            header: 'Ranked',
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
                                multiplier: 0.4
                            },
                            viewSettings: true
                        },
                        playWithAPro: {
                            id: 3,
                            header: 'Play with a pro',
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
                                multiplier: 12
                            },
                            viewSettings: true
                        },
                        achievements: {
                            id: 3,
                            header: 'Achievements',
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
                                max: 2000,
                                multiplier: 3.3
                            },
                            viewSettings: true
                        },
                    },
                    subCategories: {
                        hotsSubCategory: {
                            header: "Heroes of the Storm subcategory",
                            subCategory: true,
                            cards: {
                                hotsSub1: {
                                    link: "/categories/dota2/rampage-one",
                                    title: "Hots sub 1",
                                    text: "Let's make a rampage number one!",
                                    src: "/subcategories-photos/hots.jpg"
                                },
                                hotsSub2: {
                                    link: "/categories/dota2/rampage-two",
                                    title: "Hots sub 2",
                                    text: "Let's make a rampage number two!",
                                    src: "/subcategories-photos/hots.jpg"
                                },
                                hotsSub3: {
                                    link: "/categories/dota2/uncommon-skins",
                                    title: "Hots sub 3",
                                    text: "Let's see what the uncommon skins you have!",
                                    src: "/subcategories-photos/hots.jpg"
                                }
                            }
                        }
                    },
                    fullName: 'Heroes of the Storm'
                },
                lol: {
                    products: {
                        leveling: {
                            id: 2,
                            header: 'Leveling',
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
                                {range: [0, 10], value: 15},
                                {range: [10, 20], value: 30},
                                {range: [20, 30], value: 45},
                                {range: [30, 40], value: 60},
                                {range: [40, 50], value: 75},
                                {range: [50, 100], value: 90}
                            ],
                            sliderSettings: {
                                min: 0,
                                max: 450,
                                minValue: 10,
                                maxValue: 400,
                                step: 1
                            },
                            price: 100,
                            viewSettings: false
                        },
                        ranked: {
                            id: 3,
                            header: 'Ranked',
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
                                {range: [0, 10], value: 1},
                                {range: [10, 20], value: 2},
                                {range: [20, 30], value: 3},
                                {range: [30, 40], value: 4},
                                {range: [40, 50], value: 5},
                                {range: [50, 100], value: 6}
                            ],
                            sliderSettings: {
                                min: 0,
                                max: 100,
                                minValue: 15,
                                maxValue: 45,
                                step: 1
                            },
                            price: 100,
                            viewSettings: false
                        },
                        gameSkins: {
                            id: 3,
                            header: 'Game skins',
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
                                {range: [0, 10], value: 3},
                                {range: [10, 20], value: 6},
                                {range: [20, 30], value: 9},
                                {range: [30, 40], value: 12},
                                {range: [40, 50], value: 15},
                                {range: [50, 100], value: 18}
                            ],
                            sliderSettings: {
                                min: 0,
                                max: 260,
                                minValue: 25,
                                maxValue: 155,
                                step: 1
                            },
                            price: 100,
                            viewSettings: false
                        },
                        lowPriority: {
                            id: 3,
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
                            slider: {
                                min: 0,
                                max: 1000,
                                multiplier: 2.5
                            },
                            viewSettings: true
                        },
                        coaching: {
                            id: 3,
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
                            slider: {
                                min: 0,
                                max: 300,
                                multiplier: 0.9
                            },
                            viewSettings: true
                        },
                        partyWithAPro: {
                            id: 3,
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
                            slider: {
                                min: 0,
                                max: 451,
                                multiplier: 1
                            },
                            viewSettings: true
                        },
                        achievements: {
                            id: 3,
                            header: 'Achievements',
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
                                max: 355,
                                multiplier: 0.5
                            },
                            viewSettings: true
                        }
                    },
                    subCategories: {},
                    fullName: 'League of Legends'
                }
            }
        },
        reducers: {}
    }
)

export default productPageSlice.reducer