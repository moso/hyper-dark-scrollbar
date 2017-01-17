'use strict'

exports.decorateConfig = (config) => {
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
            ::-webkit-scrollbar-track {
                background-color: rgba(32,36,42,1);
            }
            ::-webkit-scrollbar-thumb {
                background-color: rgba(60,66,77,1);
                -webkit-border-radius: 8px;
            }
        `
    })
};
