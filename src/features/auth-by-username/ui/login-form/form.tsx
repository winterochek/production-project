import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import loginByUsername from 'features/auth-by-username/model/services/login-by-username/service';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/get-login-state/selector';
import { Button, SizeButton, ThemeButton } from 'shared/ui/app-button';
import { Text, TextTheme } from 'shared/ui/app-text';
import { Input } from 'shared/ui/app-input';
import { useAppDispatch, useAsyncReducer } from 'shared/lib/hooks';

import cls from 'shared/lib/class-names'
import cl from './styles.module.scss'

export interface Props {
    className?: string;
    autoFocus?: boolean;
    onSuccess: () => void;
}

function rootLoginForm({ className, onSuccess }: Props) {
    const dispatch = useAppDispatch()
    const { username, password, isLoading, error } = useSelector(getLoginState)

    // Подключаем логин редюсер асинхронно
    useAsyncReducer('loginForm', loginReducer)

    const handleChangeUsername = useCallback((username: string) => {
        dispatch(loginActions.setUserName(username))
    }, [dispatch])

    const handleChangePassword = useCallback((password: string) => {
        dispatch(loginActions.setPassword(password))
    }, [dispatch])

    const handleClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [dispatch, username, password, onSuccess])

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