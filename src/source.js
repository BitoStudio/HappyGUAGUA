export default {
    patterns: [
        // pattern 1
        {
            dragon: {
                width: 3250,
                height: 5788,
                align: 'top',
                eyes: {
                    pos: [{ x: 0.195, y: 0.651 }, { x: 0.223, y: 0.697 }],
                    displaceScale: { x: 0.2, y: 0.8 },
                    scale: 0.07,
                },
            }
        },
        // pattern 2
        {
            dragon: {
                width: 3250,
                height: 5752,
                align: 'top',
                eyes: {
                    pos: [{ x: 0.6, y: 0.13 }, { x: 0.686, y: 0.145 }],
                    displaceScale: { x: 0.8, y: 0.2 },
                    scale: 0.07,
                },
            }
        },
        // pattern 3
        {
            dragon: {
                width: 937,
                height: 1182,
                align: 'bottom',
                eyes: {
                    pos: [{ x: 0.503, y: 0.463 }, { x: 0.473, y: 0.528 }],
                    displaceScale: { x: 0.2, y: 0.8 },
                    scale: 0.07,
                }
            }
        }
    ],

    scratchs: [
        // scratch 1
        {
            cover: 'assets/textures/health_before.png',
            brush: 'assets/textures/brush.png',
            brushSize: 30,
            callbackRatio: 80,
            pos: [
                {
                    top: '25dvh',
                    left: '40vw',
                },
                {
                    top: '45dvh',
                    left: '35vw',
                },
                {
                    top: '20dvh',
                    left: '50vw',
                }
            ],
            results: [
                {
                    score: 1,
                    origin: 'assets/textures/health_after_1.png',
                    red: 'assets/textures/health_after_red_1.png',
                    gray: 'assets/textures/health_after_gray_1.png',
                },
                {
                    score: 1,
                    origin: 'assets/textures/health_after_2.png',
                    red: 'assets/textures/health_after_red_2.png',
                    gray: 'assets/textures/health_after_gray_2.png',
                },
                {
                    score: 1,
                    origin: 'assets/textures/health_after_3.png',
                    red: 'assets/textures/health_after_red_3.png',
                    gray: 'assets/textures/health_after_gray_3.png',
                },
                {
                    score: 2,
                    origin: 'assets/textures/health_after_4.png',
                    red: 'assets/textures/health_after_red_4.png',
                    gray: 'assets/textures/health_after_gray_4.png',
                },
                {
                    score: 2,
                    origin: 'assets/textures/health_after_5.png',
                    red: 'assets/textures/health_after_red_5.png',
                    gray: 'assets/textures/health_after_gray_5.png',
                },
                {
                    score: 3,
                    origin: 'assets/textures/health_after_6.png',
                    red: 'assets/textures/health_after_red_6.png',
                    gray: 'assets/textures/health_after_gray_6.png',
                },
                {
                    score: 3,
                    origin: 'assets/textures/health_after_7.png',
                    red: 'assets/textures/health_after_red_7.png',
                    gray: 'assets/textures/health_after_gray_7.png',
                }
            ]
        },
        // scratch 2
        {
            cover: 'assets/textures/love_before.png',
            brush: 'assets/textures/brush.png',
            brushSize: 30,
            callbackRatio: 80,
            pos: [
                {
                    top: '50dvh',
                    left: '70vw',
                },
                {
                    top: '80dvh',
                    left: '40vw',
                },
                {
                    top: '85dvh',
                    left: '30vw',
                }
            ],


            results: [
                {
                    score: 1,
                    origin: 'assets/textures/love_after_1.png',
                    red: 'assets/textures/love_after_red_1.png',
                    gray: 'assets/textures/love_after_gray_1.png',
                },
                {
                    score: 1,
                    origin: 'assets/textures/love_after_2.png',
                    red: 'assets/textures/love_after_red_2.png',
                    gray: 'assets/textures/love_after_gray_2.png',
                },
                {
                    score: 1,
                    origin: 'assets/textures/love_after_3.png',
                    red: 'assets/textures/love_after_red_3.png',
                    gray: 'assets/textures/love_after_gray_3.png',
                },
                {
                    score: 2,
                    origin: 'assets/textures/love_after_4.png',
                    red: 'assets/textures/love_after_red_4.png',
                    gray: 'assets/textures/love_after_gray_4.png',
                },
                {
                    score: 3,
                    origin: 'assets/textures/love_after_5.png',
                    red: 'assets/textures/love_after_red_5.png',
                    gray: 'assets/textures/love_after_gray_5.png',
                }
            ]

        },
        // scratch 3
        {
            cover: 'assets/textures/wealth_before.png',
            brush: 'assets/textures/brush.png',
            brushSize: 30,
            callbackRatio: 80,
            pos: [
                {
                    top: '70dvh',
                    left: '70vw',
                },
                {
                    top: '60dvh',
                    left: '70vw',
                },
                {
                    top: '75dvh',
                    left: '75vw',
                }
            ],
            results: [
                {
                    score: 1,
                    origin: 'assets/textures/wealth_after_1.png',
                    red: 'assets/textures/wealth_after_red_1.png',
                    gray: 'assets/textures/wealth_after_gray_1.png',
                },
                {
                    score: 1,
                    origin: 'assets/textures/wealth_after_2.png',
                    red: 'assets/textures/wealth_after_red_2.png',
                    gray: 'assets/textures/wealth_after_gray_2.png',
                },
                {
                    score: 2,
                    origin: 'assets/textures/wealth_after_3.png',
                    red: 'assets/textures/wealth_after_red_3.png',
                    gray: 'assets/textures/wealth_after_gray_3.png',
                },
                {
                    score: 2,
                    origin: 'assets/textures/wealth_after_4.png',
                    red: 'assets/textures/wealth_after_red_4.png',
                    gray: 'assets/textures/wealth_after_gray_4.png',
                },
                {
                    score: 2,
                    origin: 'assets/textures/wealth_after_5.png',
                    red: 'assets/textures/wealth_after_red_5.png',
                    gray: 'assets/textures/wealth_after_gray_5.png',
                },
                {
                    score: 3,
                    origin: 'assets/textures/wealth_after_6.png',
                    red: 'assets/textures/wealth_after_red_6.png',
                    gray: 'assets/textures/wealth_after_gray_6.png',
                },
                {
                    score: 3,
                    origin: 'assets/textures/wealth_after_7.png',
                    red: 'assets/textures/wealth_after_red_7.png',
                    gray: 'assets/textures/wealth_after_gray_7.png',
                }
            ]
        }
    ],

    stamps:
    {
        pos: [
            {
                top: '3dvh',
                left: '45vw',
            }, 
            {
                top: '50dvh',
                left: '0vw',
            }, 
            {
                top: '65dvh',
                left: '0vw',
            },
        ],

        src: ['assets/textures/stamp_small.png',
            'assets/textures/stamp_medium.png',
            'assets/textures/stamp_large.png']
    }
}