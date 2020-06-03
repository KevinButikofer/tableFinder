// Inside vue.config.js
module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        name: 'Tablefinder',
        themeColor: '#3880FF',
        msTileColor: '#FFFFFF',
        appleMobileWebAppCapable: 'yes',

        iconPaths:
            {
                favicon16: 'img/icons/icon-16.png',
                favicon32: 'img/icons/icon-32.png'
            }
    }
}
