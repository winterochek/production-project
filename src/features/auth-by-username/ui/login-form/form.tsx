import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  loginByUsername  from 'features/auth-by-username/model/services/login-by-username/service';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/get-login-state/selector';
import { Button, SizeButton, ThemeButton } from 'shared/ui/app-button';
import { Text, TextTheme } from 'shared/ui/app-text';
import { Input } from 'shared/ui/app-input';

import cls from 'shared/lib/class-names'
import cl from './styles.module.scss'

interface Props {
    className?: string;
    autoFocus?: boolean
}

function rootLoginForm({ className }: Props) {
    const dispatch = useDispatch()
    const { username, password, isLoading, error } = useSelector(getLoginState)

    const handleChangeUsername = useCallback((username: string) => {
        dispatch(loginActions.setUserName(username))
    }, [dispatch])

    const handleChangePassword = useCallback((password: string) => {
        dispatch(loginActions.setPassword(password))
    }, [dispatch])

    const handleClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password])

    return <div className={cls(cl.root, {}, [className])}>
        <Text title='Форма авторизации' />
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        <Input value={username} onChange={handleChangeUsername} autoFocus placeholder='username' />
        <Input value={password} onChange={handleChangePassword} placeholder='password' />
        <Button disabled={isLoading} onClick={handleClick} size={SizeButton.M} theme={ThemeButton.OUTLINE} className={cl.loginBtn}>Войти</Button>
    </div>
}

const LoginForm = memo(rootLoginForm)

export default LoginForm