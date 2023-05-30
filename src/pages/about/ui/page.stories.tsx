import { ComponentStory, ComponentMeta } from '@storybook/react';
import About from './page';
import { Theme } from 'app/providers/theme-provider';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/decorator';

export default {
    title: 'pages/About',
    component: About,
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
    },
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = () => <About/>;

export const Light = Template.bind({});

Light.args = {};

export const Dark = Template.bind({});

Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)];
