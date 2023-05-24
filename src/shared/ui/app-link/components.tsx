import cls from 'shared/lib/class-names';
import cl from './styles.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
   PRIMARY = 'primary',
   SECONDARY = 'secondary',
}

interface Props extends LinkProps {
   className?: string;
   //    children: JSX.Element | string;
   theme?: AppLinkTheme;
}

export default function AppLink({
   className,
   children,
   to,
   theme = AppLinkTheme.PRIMARY,
   ...props
}: Props) {
   return (
      <Link
         className={cls(cl.AppLink, {}, [className, cl[theme]])}
         to={to}
         {...props}
      >
         {children}
      </Link>
   );
}
