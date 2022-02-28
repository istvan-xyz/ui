import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig(
    create({
        base: 'light',
    })
);
