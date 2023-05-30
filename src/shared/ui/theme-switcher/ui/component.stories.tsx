import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeSwitcher from './component';
import { Theme } from 'app/providers/theme-provider';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/decorator';

export default {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    args: {
        to: '/'
    },
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});

Light.args = {};

export const Dark = Template.bind({});

Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)];
