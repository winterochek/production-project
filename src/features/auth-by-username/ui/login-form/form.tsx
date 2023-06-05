import { Button, SizeButton } from 'shared/ui/app-button';
import { Input } from 'shared/ui/app-input';

import cls from 'shared/lib/class-names'
import cl from './styles.module.scss'

interface Props {
    className?: string;
    autoFocus?:boolean
}

export default function LoginForm({ className }: Props) {
    return <form className={cls(cl.root, {}, [className])}>
        <Input autoFocus placeholder='username' />
        <Input placeholder='password' />
        <Button size={SizeButton.M} className={cl.loginBtn}>Войти</Button>
    </form>
}
