import cls from 'shared/lib/class-names';
import { ButtonHTMLAttributes, ComponentProps } from 'react';
import cl from './styles.module.scss';

export enum ThemeButton {
   CLEAR = 'clear',
   OUTLINE = 'outline',
   BACKGROUND = 'background',
   BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum SizeButton {
   M = 'size_m',
   L = 'size_l',
   XL = 'size_xl'
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   theme?: ThemeButton;
   square?: boolean;
   size?: SizeButton
}

export default function Button({
   className,
   children,
   theme,
   size,
   square,
   ...props
}: Props) {
   const mods: Record<string, boolean> = {
      [cl.square]: square,
   }
   return (
      <button className={cls(cl.root, mods, [className, cl[theme], cl[size],])} {...props}>
         {children}
      </button>
   );
}
