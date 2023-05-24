import cls from 'shared/lib/class-names';
import cl from './styles.module.scss';
import { ButtonHTMLAttributes, ComponentProps } from 'react';

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
      <button className={cls(cl.button, {}, [className, cl[theme]])} {...props}>
         {children}
      </button>
   );
}
