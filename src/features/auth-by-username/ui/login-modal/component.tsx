import LoginForm from '../login-form/form';
import { Modal } from 'shared/ui/modal';

interface Props {
    isOpen: boolean;
    onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: Props) {
    return <Modal lazy isOpen={isOpen} onClose={onClose}>
        <LoginForm />
    </Modal>
}
