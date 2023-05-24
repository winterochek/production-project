import AppLink, { AppLinkTheme } from 'shared/ui/app-link/components';
import cl from './styles.module.scss';
import cls from 'shared/lib/class-names';

interface Props {
   className?: string;
}

export default function NavBar({ className }: Props) {
   return (
      <nav className={cls(cl.navbar, {}, [className])}>
         <div className={cl.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
               MAIN
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
               ABOUT
            </AppLink>
         </div>
      </nav>
   );
}
