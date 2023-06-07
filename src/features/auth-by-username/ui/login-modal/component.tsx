import { Suspense } from 'react';
import { LoginForm } from '../login-form';
import { Modal } from 'shared/ui/modal';
import { SninnerLoader } from 'shared/ui/sninner-loader';

interface Props {
    isOpen: boolean;
    onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: Props) {
    return <Modal lazy isOpen={isOpen} onClose={onClose}>
        <Suspense fallback={<SninnerLoader />}>
            <LoginForm />
        </Suspense>
    </Modal>
}
