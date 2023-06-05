import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text, { TextTheme } from './component';
import { Theme } from 'app/providers/theme-provider';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/decorator';

export default {
    title: 'shared/Text',
    component: Text,
    args: {
        to: '/'
    },
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: 'Primary'
};

export const PrimaryError = Template.bind({});

PrimaryError.args = {
    title: 'Primary',
    theme: TextTheme.ERROR
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
    title: 'Primary'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkError = Template.bind({});

PrimaryDarkError.args = {
    title: 'Primary',
    theme: TextTheme.ERROR
}
PrimaryDarkError.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});

Secondary.args = {
    text: 'Secondary',
};

export const SecondaryError = Template.bind({});

SecondaryError.args = {
    text: 'Secondary',
    theme: TextTheme.ERROR
};

export const SecondaryDark = Template.bind({});

SecondaryDark.args = {
    text: 'Secondary',
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDarkError = Template.bind({});

SecondaryDarkError.args = {
    text: 'Secondary',
    theme: TextTheme.ERROR
};
SecondaryDarkError.decorators = [ThemeDecorator(Theme.DARK)];

export const Full = Template.bind({});

Full.args = {
    title: 'Primary',
    text: 'Secondary',
};

export const FullError = Template.bind({});

FullError.args = {
    title: 'Primary',
    text: 'Secondary',
    theme: TextTheme.ERROR
};

export const FullDark = Template.bind({});

FullDark.args = {
    title: 'Primary',
    text: 'Secondary',
}
FullDark.decorators = [ThemeDecorator(Theme.DARK)];

export const FullDarkError = Template.bind({});

FullDarkError.args = {
    title: 'Primary',
    text: 'Secondary',
    theme: TextTheme.ERROR
}
FullDarkError.decorators = [ThemeDecorator(Theme.DARK)];
