export default {
    patterns: [
        // pattern 1
        {
            bgTex: '/assets/textures/bg_v1.png',
            dragonTex: '/assets/textures/dragon_v1.png'
        },
        {
            bgTex: '/assets/textures/bg_v2.png',
            dragonTex: '/assets/textures/dragon_v2.png'
        },
        {
            bgTex: '/assets/textures/bg_v3.png',
            dragonTex: '/assets/textures/dragon_v3.png'
        }
    ],

    scratchs: [
        // scratch 1
        {
            cover: 'assets/textures/health_before.png',
            brush: 'assets/textures/brush.png',
            brushSize: 30,
            callbackRatio: 70,
            results: [
                'assets/textures/health_after_1.png'
            ]
        },
        {
            cover: 'assets/textures/love_before.png',
            brush: 'assets/textures/tbr.png',
            brushSize: 30,
            callbackRatio: 70,
            results: [
                'assets/textures/love_after_1.png'
            ]
        },
        {
            cover: 'assets/textures/wealth_before.png',
            brush: 'assets/textures/tbr.png',
            brushSize: 30,
            callbackRatio: 70,
            results: [
                'assets/textures/wealth_after_1.png'
            ]
        }
    ]
}