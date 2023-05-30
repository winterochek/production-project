import { ComponentStory, ComponentMeta } from '@storybook/react';
import NotFound from './page';
import { Theme } from 'app/providers/theme-provider';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/decorator';

export default {
    title: 'pages/NotFound',
    component: NotFound,
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
    },
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = () => <NotFound />;

export const Light = Template.bind({});

Light.args = {};

export const Dark = Template.bind({});

Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)];
