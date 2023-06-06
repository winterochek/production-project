import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/style-decorator/decorator';
import { StoreDecorator } from '../../src/shared/config/storybook/store-decorator/decorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/theme-decorator/decorator';
import { Theme } from '../../src/app/providers/theme-provider'
import { RouterDecorator } from '../../src/shared/config/storybook/router-derorator/decorator'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT))