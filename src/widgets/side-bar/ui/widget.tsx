import { useState } from 'react';
import cls from 'shared/lib/class-names';
import { Button, ThemeButton, SizeButton } from 'shared/ui/app-button';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import { LangSwitcher } from 'shared/ui/lang-switcher';
import cl from './styles.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link';
import { RoutePaths } from 'shared/config/routes';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

interface Props {
   className?: string;
}

export default function SideBar({ className }: Props) {
   const [collapsed, setCollapsed] = useState(false);
   const onToggle = () => {
      setCollapsed((v) => !v);
   };
   return (
      <div
         data-testid={'sidebar'}
         className={cls(cl.root, { [cl.collapsed]: collapsed }, [className])}
      >
         <Button theme={ThemeButton.BACKGROUND_INVERTED} square={true} size={SizeButton.L} className={cl.collapseBtn} data-testid='sidebar-toggle' onClick={onToggle}>
            {collapsed ? '>' : '<'}
         </Button>
         <div className={cl.items}>
            <AppLink className={cl.item} theme={AppLinkTheme.SECONDARY} to={RoutePaths.main}>
               <MainIcon className={cl.icon} />
               <span className={cl.link}>Главная</span>
            </AppLink>
            <AppLink className={cl.item} theme={AppLinkTheme.SECONDARY} to={RoutePaths.about}>
               <AboutIcon className={cl.icon} />
               <span className={cl.link}>О сайте</span>
            </AppLink>
         </div>
         <div className={cl.switchers}>
            <ThemeSwitcher />
            <LangSwitcher short={collapsed} />
         </div>
      </div>
   );
}
