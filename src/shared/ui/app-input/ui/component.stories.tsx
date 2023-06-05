import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './component';
import { Theme } from 'app/providers/theme-provider';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/decorator';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: {
            control: 'color'
        }
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    placeholder: 'Type text',
    value: 'Test value'
};

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'Type text',
    value: 'Test value'
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

