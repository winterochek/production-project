import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppLink, { AppLinkTheme } from './component';
import { Theme } from 'app/providers/theme-provider';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/decorator';

export default {
    title: 'shared/Link',
    component: AppLink,
    args: {
        to: '/'
    },
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Primary',
    theme: AppLinkTheme.PRIMARY
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
    children: 'PrimaryDark',
    theme: AppLinkTheme.PRIMARY
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});

Secondary.args = {
    children: 'Secondary',
    theme: AppLinkTheme.SECONDARY
};

export const SecondaryDark = Template.bind({});

SecondaryDark.args = {
    children: 'SecondaryDark',
    theme: AppLinkTheme.SECONDARY
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});

Red.args = {
    children: 'Red',
    theme: AppLinkTheme.RED
};

export const RedDark = Template.bind({});

RedDark.args = {
    children: 'Red',
    theme: AppLinkTheme.RED
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];

