import { ComponentStory, ComponentMeta } from '@storybook/react';
import Main from './page';
import { Theme } from 'app/providers/theme-provider';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/decorator';

export default {
    title: 'pages/Main',
    component: Main,
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
    },
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = () => <Main/>;

export const Light = Template.bind({});

Light.args = {};

export const Dark = Template.bind({});

Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)];
