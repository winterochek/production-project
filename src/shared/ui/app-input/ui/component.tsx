import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

import cls from 'shared/lib/class-names'
import cl from './styles.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface Props extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean
}


function rootInput({ className, value, onChange, autoFocus, type = 'text', placeholder, ...rest }: Props) {

    const [focused, setFocused] = useState(false)
    const [linePosition, setLinePosition] = useState(0)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value)
        setLinePosition(event.target.value.length)
    }

    const handleOnBlur = () => {
        setFocused(false)
    }

    const handleOnFocus = () => {
        setFocused(true)
    }

    const handleOnSelect = (event: any) => {
        setLinePosition(event?.target?.selectionStart || 0)
    }

    useEffect(() => {
        if (autoFocus) {
            setFocused(true)
            inputRef.current?.focus()
        }
    }, [autoFocus])


    return <div className={cls(cl.root, {}, [className])}>
        {placeholder && <div className={cl.placeholder}>{`${placeholder} >`}</div>}
        <div className={cl.inputWrapper}>
            <input ref={inputRef} onBlur={handleOnBlur} onSelect={handleOnSelect} onFocus={handleOnFocus} type={type} value={value} onChange={handleOnChange} className={cl.input} {...rest} />
            {focused && <span style={{ left: `${linePosition * 7}px` }} className={cl.line} />}
        </div>
    </div>
}

const Input = memo(rootInput)

export default Input

