import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
    element?: HTMLElement;
    children: ReactNode
}

export default function Portal({ children, element = document.body }: Props) {
    return createPortal(children, element)
}
