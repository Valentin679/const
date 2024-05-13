const constants = {
    WORK_PRICE_MINUTE: 3,
    TEMPER_TIME: 7,
    TEMPER_PRICE: 21,
    WORK_ONE_FORM_PRICE: 4,
    CHOCOLATE_PRICE: 1500,
}

const packing = {
    candies: {
        big_box: {
            id: 1,
            size: {
                width: 200,
                height: 200,
                depth: 30,
                places: 16
            },
            filler: false,
            color: 'white',
            src: '200x200x30-white-16.jpg'

        },
        small_box: {
            id: 2,
            size: {
                width: 145,
                height: 145,
                depth: 35,
                places: 9
            },
            filler: false,
            color: 'pink',
            src: '145x145x35-pink-9.jgp'

        },
        small_choc_box: {
            id: 3,
            size: {
                width: 177,
                height: 177,
                depth: 38,
                places: 9
            },
            filler: false,
            color: 'red',
            src: '177x177x38-red-8+1.jpg'
        },
    },
    chocolate: {
        box_1: {
            id: 1,
            size: {
                width: 150,
                height: 150,
                depth: 40,
                places: 0
            },
            price: 50,
            filler: true,
            color: 'white',
            src: '150x150x40-white.jpg'
        },
        box_2: {
            id: 2,
            size: {
                width: 200,
                height: 200,
                depth: 35,
                places: 0
            },
            price: 30,
            filler: true,
            color: 'white',
            src: '200x200x35-white.jpg'
        },
        box_3: {
            id: 3,
            size: {
                width: 250,
                height: 210,
                depth: 40,
                places: 0
            },
            price: 40,
            filler: true,
            color: 'white',
            src: '250x210x40-white.jpg'
        },
    }
}
const candies = {
    conf1: {
        weight: 3,
        src: "/conf1.png"
    },
    conf2: {
        weight: 3,
        src: "/conf1.png"
    },
}
const forms = {
    mens_set: {
        briefcase: {
            width: 197,
            height: 152,
            weight: 20,
            src: "/mens_set/briefcase-179x152x20g.png"
        },
        clock: {
            width: 105,
            height: 179,
            weight: 10,
            src: "/mens_set/clock-105x179-10g.png"
        },
        glasses: {
            width: 170,
            height: 67,
            weight: 10,
            src: "/mens_set/glasses-170x67-10g.png"
        },
        holiday: {
            width: 318,
            height: 87,
            weight: 17,
            src: "/mens_set/happy-holiday-318x87-17g.png"
        },
        mustache: {
            width: 182,
            height: 66,
            weight: 8,
            src: "/mens_set/mustache-182x66-8g.png"
        },
        tie: {
            width: 69,
            height: 182,
            weight: 8,
            src: "/mens_set/tie-69x182-8g.png"
        },
        wallet: {
            width: 179,
            height: 124,
            weight: 19,
            src: "/mens_set/wallet-179x124-19g.png"
        }
    }
}
