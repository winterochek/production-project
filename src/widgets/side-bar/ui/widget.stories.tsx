import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme-provider';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/decorator';
import SideBar from './widget';

export default {
    title: 'widget/SideBar',
    component: SideBar,
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
        // theme: {
        //     control: {
        //         type: 'select',
        //         options: [ThemeButton.CLEAR, ThemeButton.OUTLINE, 'no theme']
        //     }
        // },
    },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Light = Template.bind({});

Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];