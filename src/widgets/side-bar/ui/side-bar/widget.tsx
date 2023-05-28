import cls from 'shared/lib/class-names';
import React, { useState } from 'react';
import { Button } from 'shared/ui/app-button';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import { LangSwitcher } from 'shared/ui/lang-switcher';
import cl from './styles.module.scss';

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
         <Button data-testid='sidebar-toggle' onClick={onToggle}>
            toggle
         </Button>
         <div className={cl.switchers}>
            <ThemeSwitcher />
            <LangSwitcher />
         </div>
      </div>
   );
}
