export default {
    patterns: [
        // pattern 1
        {
            bgTex: '/assets/textures/bg_v1.png',

            dragon: {
                align: 'top',
                eyes: {
                    pos: [{ x: 0.195, y: 0.651 }, { x: 0.223, y: 0.697 }],
                    displaceScale: { x: 0.2, y: 0.8 },
                    scale: 0.07,
                    tex: '/assets/textures/eyeballs_v1.png'
                }
            }
        },
        {
            bgTex: '/assets/textures/bg_v2.png',

            dragon: {
                align: 'top',
                eyes: {
                    pos: [{ x: 0.59, y: 0.125 }, { x: 0.6745, y: 0.139 }],
                    displaceScale: { x: 0.8, y: 0.2 },
                    scale: 0.07,
                    tex: '/assets/textures/eyeballs_v2.png'
                }
            }
        },
        {
            bgTex: '/assets/textures/bg_v3.png',

            dragon: {
                align: 'bottom',
                eyes: {
                    pos: [{ x: 0.511, y: 0.459 }, { x: 0.485, y: 0.522 }],
                    displaceScale: { x: 0.2, y: 0.8 },
                    scale: 0.07,
                    tex: '/assets/textures/eyeballs_v3.png'
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
                    top: '25vh',
                    left: '40vw',
                },
                {
                    top: '80vh',
                    left: '40vw',
                },
                {
                    top: '20vh',
                    left: '50vw',
                }
            ],
            results: [
                {
                    origin: 'assets/textures/health_after_1.png',
                    red: 'assets/textures/health_after_red_1.png',
                    gray: 'assets/textures/health_after_gray_1.png',
                }
            ]
        },
        {
            cover: 'assets/textures/love_before.png',
            brush: 'assets/textures/tbr.png',
            brushSize: 30,
            callbackRatio: 90,
            pos: [
                {
                    top: '50vh',
                    left: '70vw',
                },
                {
                    top: '57vh',
                    left: '60vw',
                },
                {
                    top: '80vh',
                    left: '30vw',
                }
            ],


            results: [
                {
                    origin: 'assets/textures/love_after_1.png',
                    red: 'assets/textures/love_after_red_1.png',
                    gray: 'assets/textures/love_after_gray_1.png',
                }
            ]

        },
        {
            cover: 'assets/textures/wealth_before.png',
            brush: 'assets/textures/tbr.png',
            brushSize: 30,
            callbackRatio: 90,
            pos: [
                {
                    top: '70vh',
                    left: '70vw',
                },
                {
                    top: '37vh',
                    left: '40vw',
                },
                {
                    top: '65vh',
                    left: '75vw',
                }
            ],
            results: [
                {
                    origin: 'assets/textures/wealth_after_1.png',
                    red: 'assets/textures/wealth_after_red_1.png',
                    gray: 'assets/textures/wealth_after_gray_1.png',
                }
            ]
        }
    ]
}