import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginForm from './form';
import { Theme } from 'app/providers/theme-provider';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/decorator';
import { StoreDecorator } from 'shared/config/storybook/store-decorator/decorator';

export default {
    title: 'feat/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: {
            control: 'color'
        }
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    loginForm: {
        username: 'default',
        password: 'default'
    }
})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: {
        username: 'default',
        password: 'default'
    }
})];


