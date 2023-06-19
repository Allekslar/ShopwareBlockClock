import './component';
import './preview';
// import deDE from './snippet/de-DE.json';
// import enGB from './snippet/en-GB.json';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'clock-block',
    label: 'aleks-wsdev.blocks.text-image.clock-block.label',
    category: 'aleks-wsdev',
    component: 'sw-cms-block-clock-block',
    previewComponent: 'sw-cms-preview-clock-block',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },

    slots: {
        'clock': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `<h2 style="text-align: center;">Clock block</h2>`.trim()
                    }
                }
            }
        },

    }
});
