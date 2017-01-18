'use strict'
const Color = require('color');

exports.decorateConfig = (config) => {
    const colors = {
        light: Color(config.foregroundColor).darken(0.62).string(),
        dark: Color(config.backgroundColor).darken(0.2).string(),
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
