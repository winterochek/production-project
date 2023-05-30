import cls from 'shared/lib/class-names';
import { Link, LinkProps } from 'react-router-dom';
import cl from './styles.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface Props extends LinkProps {
  className?: string;
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
      className={cls(cl.root, {}, [className, cl[theme]])}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}
