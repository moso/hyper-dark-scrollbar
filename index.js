'use strict'
const Color = require('color');

exports.decorateConfig = (config) => {
    const backColor = Color(config.backgroundColor)
    const colors = {
        light: backColor.lightness(27).string(),
        dark: backColor.darken(0.18).string(),
        hover: backColor.lightness(33).string()
    }

    return Object.assign({}, config, {
        css: `
            ${config.css || ''}
            .xterm-viewport::-webkit-scrollbar-button {
                width: 0;
                height: 0;
                display: none;
            }
            .xterm-viewport::-webkit-scrollbar-corner {
                background-color: transparent;
            }
            .xterm-viewport::-webkit-scrollbar {
                width: 4px;
                height: 4px;
            }
            .xterm-viewport::-webkit-scrollbar-track,
            .xterm-viewport::-webkit-scrollbar-thumb {
                -webkit-border-radius: 8px;
            }
            .xterm-viewport::-webkit-scrollbar-track {
                background-color: ${colors.dark};
            }
            .xterm-viewport::-webkit-scrollbar-thumb {
                background-color: ${colors.light};
                -webkit-box-shadow: none;
            }
            .xterm-viewport::-webkit-scrollbar-thumb:hover {
                background-color: ${colors.hover};
                -webkit-box-shadow: none;
            }
            .xterm .xterm-viewport {
                overflow-y: auto;
            }
        `
    })
};
