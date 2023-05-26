import cls from 'shared/lib/class-names';
import { ButtonHTMLAttributes, ComponentProps } from 'react';
import cl from './styles.module.scss';

export enum ThemeButton {
   CLEAR = 'clear',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   theme?: ThemeButton;
}

export default function Button({
  className,
  children,
  theme,
  ...props
}: Props) {
  return (
    <button className={cls(cl.root, {}, [className, cl[theme]])} {...props}>
      {children}
    </button>
  );
}
