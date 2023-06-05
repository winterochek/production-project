import cls from 'shared/lib/class-names'
import cl from './styles.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface Props {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme
}

export default function Text({ className, title, text, theme = TextTheme.PRIMARY }: Props) {
    return <div className={cls(cl.root, { [cl[theme]]: true }, [className])}>
        {title && <p className={cl.title}>{title}</p>}
        {text && <p className={cl.text}>{text}</p>}
    </div>
}
