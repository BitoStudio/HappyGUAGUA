export default {
    patterns: [
        // pattern 1
        {
            bgTex: '/assets/textures/bg_v1.png',
            
            dragon: {
                tex: '/assets/textures/dragon_v1.png',
                eyes: {
                    pos: [{ x: 0.2, y: 0.651 }, { x: 0.225, y: 0.696 }],
                    scale: 0.07
                }
            }
        },
        {
            bgTex: '/assets/textures/bg_v2.png',

            dragon: {
                tex: '/assets/textures/dragon_v2.png',
                eyes: {
                    pos: [{ x: 0.2, y: 0.651 }, { x: 0.225, y: 0.696 }],
                    scale: 0.07
                }
            }
        },
        {
            bgTex: '/assets/textures/bg_v3.png',

            dragon: {
                tex: '/assets/textures/dragon_v3.png',
                eyes: {
                    pos: [{ x: 0.2, y: 0.651 }, { x: 0.225, y: 0.696 }],
                    scale: 0.07
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
            top: '25vh',
            left: '40vw',
            results: [
                'assets/textures/health_after_1.png'
            ]
        },
        {
            cover: 'assets/textures/love_before.png',
            brush: 'assets/textures/tbr.png',
            brushSize: 30,
            callbackRatio: 70,
            top: '50vh',
            left: '70vw',

            results: [
                'assets/textures/love_after_1.png'
            ]

        },
        {
            cover: 'assets/textures/wealth_before.png',
            brush: 'assets/textures/tbr.png',
            brushSize: 30,
            callbackRatio: 70,
            top: '70vh',
            left: '70vw',
            results: [
                'assets/textures/wealth_after_1.png'
            ]
        }
    ]
}