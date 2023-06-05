import { ComponentStory, ComponentMeta } from '@storybook/react';
import Form from './form';
import { Theme } from 'app/providers/theme-provider';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/decorator';
import { StoreDecorator } from 'shared/config/storybook/store-decorator/decorator';

export default {
    title: 'feat/Form',
    component: Form,
    argTypes: {
        backgroundColor: {
            control: 'color'
        }
    },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

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


