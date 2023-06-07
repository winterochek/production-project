import { memo, useMemo, useState } from 'react';
import { Button, ThemeButton, SizeButton } from 'shared/ui/app-button';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import { LangSwitcher } from 'shared/ui/lang-switcher';
import { SidebarItemsList } from '../model/items';
import { SidebarItem } from './sidebar-item';

import cls from 'shared/lib/class-names';
import cl from './styles.module.scss';

interface Props {
   className?: string;
}

export default function SideBar({ className }: Props) {
   const [collapsed, setCollapsed] = useState(false);
   const onToggle = () => {
      setCollapsed((v) => !v);
   };

   const itemsList = useMemo(() => {
      return SidebarItemsList.map(item => (
         <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      ))
   }, [collapsed])
   return (
      <div
         data-testid={'sidebar'}
         className={cls(cl.root, { [cl.collapsed]: collapsed }, [className])}
      >
         <Button theme={ThemeButton.BACKGROUND_INVERTED} square={true} size={SizeButton.L} className={cl.collapseBtn} data-testid='sidebar-toggle' onClick={onToggle}>
            {collapsed ? '>' : '<'}
         </Button>
         <div className={cl.items}>
            {itemsList}
         </div>
         <div className={cl.switchers}>
            <ThemeSwitcher />
            <LangSwitcher short={collapsed} />
         </div>
      </div>
   );
}