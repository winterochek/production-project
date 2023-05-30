import { ComponentStory, ComponentMeta } from '@storybook/react';
import SninnerLoader from './component';
import { Theme } from 'app/providers/theme-provider';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/decorator';

export default {
    title: 'shared/Spinner-loader',
    component: SninnerLoader,
    args: {
        to: '/'
    },
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
    },
} as ComponentMeta<typeof SninnerLoader>;

const Template: ComponentStory<typeof SninnerLoader> = (args) => <SninnerLoader {...args} />;

export const Light = Template.bind({});

Light.args = {};

export const Dark = Template.bind({});

Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)];
