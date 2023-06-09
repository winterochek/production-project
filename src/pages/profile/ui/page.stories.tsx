import { ComponentStory, ComponentMeta } from '@storybook/react';
import Profile from './page';
import { Theme } from 'app/providers/theme-provider';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/decorator';
import { StoreDecorator } from 'shared/config/storybook/store-decorator/decorator';

export default {
    title: 'pages/Profile',
    component: Profile,
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
    },
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = () => <Profile />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({})]

Light.args = {};

export const Dark = Template.bind({});

Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
