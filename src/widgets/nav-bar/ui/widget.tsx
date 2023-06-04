import { useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/app-button';
import { Modal } from 'shared/ui/modal';

import cls from 'shared/lib/class-names';
import cl from './styles.module.scss';
interface Props {
  className?: string;
}

export default function NavBar({ className }: Props) {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const handleOpen = useCallback(() => setIsAuthModal(true), [])
  const handleClose = useCallback(() => setIsAuthModal(false), [])
  return (
    <nav className={cls(cl.navbar, {}, [className])}>
      <section className={cl.links}>
        <Button onClick={handleOpen} theme={ThemeButton.CLEAR_INVERTED}>Войти</Button>
      </section>
      <Modal isOpen={isAuthModal} onClose={handleClose}><div>Hello modal!</div></Modal>
    </nav>
  );
}
