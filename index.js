'use strict'
const Color = require('color');

exports.decorateConfig = (config) => {
    const backColor = Color(config.backgroundColor)
    const colors = {
        light: backColor.lightness(27).string(),
        dark: backColor.darken(0.18).string()
    }

    return Object.assign({}, config, {
        termCSS: `
            ${config.termCSS || ''}
            ::-webkit-scrollbar-button {
                width: 0;
                height: 0;
                display: none;
            }
            ::-webkit-scrollbar-corner {
                background-color: transparent;
            }
            ::-webkit-scrollbar {
                width: 4px;
                height: 4px;
            }
            ::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb {
                -webkit-border-radius: 8px;
            }
            ::-webkit-scrollbar-track {
                background-color: ${colors.dark};
            }
            ::-webkit-scrollbar-thumb {
                background-color: ${colors.light};
                -webkit-box-shadow: none;
            }
        `
    })
};
