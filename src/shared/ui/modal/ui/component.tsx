import { useState, useRef, useCallback, useEffect } from 'react';
import { Portal } from 'shared/ui/portal';

import cls from 'shared/lib/class-names'
import cl from './styles.module.scss'
import { useTheme } from 'app/providers/theme-provider';

interface Props {
    children?: JSX.Element;
    isOpen: boolean
    onClose: () => void
}

const ANIMATION_DELAY = 300;

export default function Modal({ children, isOpen, onClose }: Props) {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme()

    const closeHandler = useCallback(() => {
        const handler = () => {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
        onClose && handler()
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [cl.opened]: isOpen,
        [cl.isClosing]: isClosing,
    }

    useEffect(() => {
        isOpen && window.addEventListener('keydown', onKeyDown);
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={cls(cl.root, mods, [theme])}>
                <div className={cl.overlay} onClick={closeHandler}>
                    <div className={cl.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
