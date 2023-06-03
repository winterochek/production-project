import { ComponentMeta, ComponentStory } from "@storybook/react";
import Modal from "./component";
import { SninnerLoader } from "shared/ui/sninner-loader";


export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalWindow = Template.bind({});

ModalWindow.args = {
    isOpen: true,
    onClose: () => 1,
    children: 'Hello world!',
};

export const LoadingContentModal = Template.bind({})

LoadingContentModal.args = {
    isOpen: true,
    onClose: () => 1,
    children: <SninnerLoader />
}