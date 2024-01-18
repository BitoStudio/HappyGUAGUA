export default {
    patterns: [
        // pattern 1
        {
            bgTex: '/assets/textures/bg_v1.png',

            dragon: {
                tex: '/assets/textures/dragon_v1.png',
                align: 'top',
                eyes: {
                    pos: [{ x: 0.2, y: 0.651 }, { x: 0.225, y: 0.696 }],
                    scale: 0.08
                }
            }
        },
        {
            bgTex: '/assets/textures/bg_v2.png',

            dragon: {
                tex: '/assets/textures/dragon_v2.png',
                align: 'top',
                eyes: {
                    pos: [{ x: 0.60, y: 0.125 }, { x: 0.68, y: 0.14 }],
                    scale: 0.08
                }
            }
        },
        {
            bgTex: '/assets/textures/bg_v3.png',

            dragon: {
                tex: '/assets/textures/dragon_v3.png',
                align: 'bottom',
                eyes: {
                    pos: [{ x: 0.5, y: 0.5 }, { x: 0.47, y: 0.56 }],
                    scale: 0.08
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
            callbackRatio: 70,
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
                    top: '15vh',
                    left: '50vw',
                }
            ],
            results: [
                'assets/textures/health_after_1.png'
            ]
        },
        {
            cover: 'assets/textures/love_before.png',
            brush: 'assets/textures/tbr.png',
            brushSize: 30,
            callbackRatio: 70,
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
                'assets/textures/love_after_1.png'
            ]

        },
        {
            cover: 'assets/textures/wealth_before.png',
            brush: 'assets/textures/tbr.png',
            brushSize: 30,
            callbackRatio: 70,
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
                    left: '70vw',
                }
            ],
            results: [
                'assets/textures/wealth_after_1.png'
            ]
        }
    ]
}