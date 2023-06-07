import { useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/app-button';

import cls from 'shared/lib/class-names';
import cl from './styles.module.scss';
import { LoginModal } from 'features/auth-by-username';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '../../../entities/user';
interface Props {
  className?: string;
}

export default function NavBar({ className }: Props) {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const dispatch = useDispatch()
  const authData = useSelector(getUserAuthData)

  const handleOpen = useCallback(() => setIsAuthModal(true), [])
  const handleClose = useCallback(() => setIsAuthModal(false), [])
  const handleLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [])

  if (authData) {
    return <nav className={cls(cl.navbar, {}, [className])}>
      <section className={cl.links}>
        <Button onClick={handleLogout} theme={ThemeButton.CLEAR_INVERTED}>Выйти</Button>
      </section>
    </nav>
  }

  return (
    <nav className={cls(cl.navbar, {}, [className])}>
      <section className={cl.links}>
        <Button onClick={handleOpen} theme={ThemeButton.CLEAR_INVERTED}>Войти</Button>
      </section>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={handleClose} />}
    </nav>
  );
}
