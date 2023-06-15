import { useState, useRef, useCallback, useEffect } from 'react';
import { Portal } from 'shared/ui/portal';

import cls, { Mods } from 'shared/lib/class-names'
import cl from './styles.module.scss'

interface Props {
    className?: string,
    children?: JSX.Element;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export default function Modal({ className, children, isOpen, onClose, lazy }: Props) {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false)

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const closeHandler = useCallback(() => {
        const handler = () => {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
        handler()

    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Mods = {
        [cl.opened]: isOpen,
        [cl.isClosing]: isClosing,
    }

    useEffect(() => {
        isOpen && window.addEventListener('keydown', onKeyDown);
        return () => {
            timerRef.current && clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    useEffect(() => {
        isOpen && setIsMounted(true)
    }, [isOpen])

    if (lazy && !isMounted) {
        return null
    }


    return (
        <Portal>
            <div className={cls(cl.root, mods, [className])}>
                <div className={cl.overlay} onClick={closeHandler}>
                    <div className={cl.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
