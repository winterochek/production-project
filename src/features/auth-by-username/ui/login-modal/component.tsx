import LoginForm from '../login-form/form';
import { Modal } from 'shared/ui/modal';

import cls from 'shared/lib/class-names'
import cl from './styles.module.scss'

interface Props {
    className?: string;
    isOpen: boolean;
    onClose: () => void
}

export default function LoginModal({ className, isOpen, onClose }: Props) {
    return <Modal lazy isOpen={isOpen} onClose={onClose} className={cls(cl.root, {}, [className])}>
        <LoginForm />
    </Modal>
}
